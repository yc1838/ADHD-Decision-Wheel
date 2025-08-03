// All logic wrapped in IIFE to avoid global collisions
(function(window, document) {
  const tasks = [
    "📚 Read System Design Book",
    "📝 Modify Resume",
    "💻 Practice Leetcode",
    "🚀 Build a Project (Vibe Coding)",
    "📖 Read a book of choice",
    "🎵 Enjoy Music",
    "🏃‍♂️ Exercise",
    "🧘‍♀️ Meditation time",
    "🎨 Creative project",
    "🧹 Do chores"
  ];
  let isSpinning = false;
  let currentRotation = 0;

  function generateColors(count) {
    const base = ['#FF6B9D','#A8E6CF','#FF9AA2','#74B9FF','#FFB3BA','#6C5CE7','#FFC4A3','#BAE1FF','#FFD93D','#A29BFE','#FFFFBA','#BAFFC9'];
    return Array.from({ length: count }, (_, i) => base[i % base.length]);
  }

  function debugLog(msg) {
    const d = document.getElementById('debugConsole');
    d.textContent += msg + '\n';
    console.log(msg);
  }

  function clearDebug() {
    document.getElementById('debugConsole').textContent = '';
  }

  function updateWheel() {
    const wheel = document.getElementById('wheel');
    const list = document.getElementById('tasksList');
    const err = document.getElementById('error');

    if (!tasks.length) {
      wheel.innerHTML = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#6c757d;font-weight:bold;text-align:center;font-size:14px;">🐕❓<br>Add tasks to spin!</div>';
      list.innerHTML = '';
      err.textContent = '';
      return;
    }

    err.textContent = tasks.length < 2 ? 'Add at least 2 tasks to spin!' : '';
    const colors = generateColors(tasks.length);
    const seg = 360 / tasks.length;
    const stops = tasks.map((_, i) => `${colors[i]} ${i*seg}deg ${(i+1)*seg}deg`).join(',');
    wheel.style.background = `conic-gradient(${stops})`;

    let labels = '';
    tasks.forEach((t, i) => {
      const ang = (i * seg) + (seg/2) - 90;
      const x = Math.cos(ang * Math.PI/180) * 120;
      const y = Math.sin(ang * Math.PI/180) * 120;
      labels += `<div class="segment-text" style="transform:translate(-50%,-50%) translate(${x}px,${y}px) rotate(${ang}deg);left:50%;top:50%;">${t}</div>`;
    });
    wheel.innerHTML = labels;
    
    // Add center circle outside the wheel
    const wheelContainer = document.querySelector('.wheel-container');
    let centerDot = wheelContainer.querySelector('.center-dot');
    if (!centerDot) {
      centerDot = document.createElement('div');
      centerDot.className = 'center-dot';
      centerDot.innerHTML = '<div class="center-emoji">🔮</div>';
      wheelContainer.appendChild(centerDot);
    }

    list.innerHTML = tasks.map((t, i) =>
      `<div class="task-item">${t}<button class="task-delete" data-index="${i}">×</button></div>`
    ).join('');
  }

  function addTask() {
    const inp = document.getElementById('taskInput');
    const t = inp.value.trim();
    if (!t) return;
    if (tasks.length >= 12) {
      document.getElementById('error').textContent = 'Max 12 tasks';
      return;
    }
    if (tasks.indexOf(t) !== -1) {
      document.getElementById('error').textContent = 'Task exists';
      return;
    }
    tasks.push(t);
    inp.value = '';
    updateWheel();
  }

  function removeTask(i) {
    tasks.splice(i, 1);
    updateWheel();
  }

  function clearAllTasks() {
    if (!tasks.length) {
      document.getElementById('error').textContent = 'No tasks to clear';
      setTimeout(() => { document.getElementById('error').textContent = ''; }, 2000);
      return;
    }
    tasks.splice(0, tasks.length);
    updateWheel();
    document.getElementById('result').textContent = '';
    debugLog('Cleared all tasks');
  }

  function spinWheel() {
    if (isSpinning || tasks.length < 2) return;
    isSpinning = true;
    const wheel = document.getElementById('wheel');
    const res = document.getElementById('result');
    const btn = document.getElementById('spinBtn');
    const stopBtn = document.getElementById('stopBtn');
    btn.disabled = true;
    stopBtn.disabled = false;
    res.textContent = '';
    res.style.display = 'none';
    clearDebug();
    
    // Always reset wheel transition to normal at start of spin
    wheel.style.transition = 'transform 3s cubic-bezier(0.23,1,0.32,1)';

    const spins = Math.floor(Math.random() * 3) + 7;
    const randDeg = Math.random() * 360;
    const total = currentRotation + spins * 360 + randDeg;
    debugLog(`spins=${spins}, randDeg=${randDeg.toFixed(2)}, total=${total.toFixed(2)}`);
    wheel.style.transform = `rotate(${total}deg)`;
    currentRotation = total;
    
          // Make center emoji grow and fade out during spin
      const centerEmoji = document.querySelector('.center-emoji');
      centerEmoji.style.transition = 'all 3s ease-out';
      centerEmoji.style.transform = 'scale(50)';
      centerEmoji.style.opacity = '0';
      
      // Play spinning sound
      soundManager.playSpinSound();
      
      // After 3 seconds, immediately reset the emoji back to center
      setTimeout(() => {
        centerEmoji.style.transition = 'none';
        centerEmoji.style.transform = 'scale(1)';
        centerEmoji.style.opacity = '1';
      }, 3000);

          setTimeout(() => {
        let rot = currentRotation % 360;
        if (rot < 0) rot += 360;
        const segSize = 360 / tasks.length;
        const pointer = (-90 - rot + 360) % 360;
        debugLog(`NATURAL STOP - rot=${rot.toFixed(2)}, pointer=${pointer.toFixed(2)}`);

        let best = 0, minDiff = 360;
        tasks.forEach((_, i) => {
          let center = ((i * segSize) + segSize/2 - 90 + 360) % 360;
          let diff = Math.abs(pointer - center);
          if (diff > 180) diff = 360 - diff;
          if (diff < minDiff) { minDiff = diff; best = i; }
        });
      const chosen = tasks[best];
      const colors = generateColors(tasks.length);
      const winningColor = colors[best];
      debugLog(`bestIndex=${best}, chosen=${chosen}`);
      const activeBtn = document.querySelector('.lang-btn.active');
      const currentLang = activeBtn && activeBtn.textContent === 'English' ? 'en' : 'zh';
      const resultText = currentLang === 'zh' ? '✨ 命运选择了… ✨' : '✨ Destiny had chosen... ✨';
      res.innerHTML = `<div>${resultText}</div><div>${chosen}</div>`;
      res.style.background = winningColor;
      res.style.display = 'flex';
      btn.disabled = false;
      stopBtn.disabled = true;
      isSpinning = false;
      
      // Create confetti celebration!
      createConfetti();
      
      // Reset center emoji back to normal size and opacity, facing upward
      const centerEmojiReset = document.querySelector('.center-emoji');
      centerEmojiReset.style.transition = 'none';
      centerEmojiReset.style.transform = 'scale(1) rotate(0deg)';
      centerEmojiReset.style.opacity = '1';
      
      // Reset wheel transition back to normal for next spin
      wheel.style.transition = 'transform 3s cubic-bezier(0.23,1,0.32,1)';
    }, 3000);
  }

  // Event delegation for remove buttons
  document.getElementById('tasksList').addEventListener('click', function(e) {
    if (e.target.classList.contains('task-delete')) {
      removeTask(parseInt(e.target.getAttribute('data-index'), 10));
    }
  });

  document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
  });

  // Expose globals
  window.addTask = addTask;
  window.clearAllTasks = clearAllTasks;
  window.spinWheel = spinWheel;
  
  function stopWheel() {
    if (!isSpinning) return;
    
          // Immediately stop the wheel at current position
      const wheel = document.getElementById('wheel');
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${currentRotation}deg)`;
      
      // Play stop sound
      soundManager.playStopSound();
    

    
    // Use the same calculation logic as natural stop
    let rot = currentRotation % 360;
    if (rot < 0) rot += 360;
    const segSize = 360 / tasks.length;
    const pointer = (-90 - rot + 360) % 360;
    debugLog(`STOPPED - rot=${rot.toFixed(2)}, pointer=${pointer.toFixed(2)}`);

    let best = 0, minDiff = 360;
    tasks.forEach((_, i) => {
      let center = ((i * segSize) + segSize/2 - 90 + 360) % 360;
      let diff = Math.abs(pointer - center);
      if (diff > 180) diff = 360 - diff;
      if (diff < minDiff) { minDiff = diff; best = i; }
    });
    
    const chosen = tasks[best];
    const colors = generateColors(tasks.length);
    const winningColor = colors[best];
    const activeBtn = document.querySelector('.lang-btn.active');
    const currentLang = activeBtn && activeBtn.textContent === 'English' ? 'en' : 'zh';
    const resultText = currentLang === 'zh' ? '✨ 命运选择了… ✨' : '✨ Destiny had chosen... ✨';
    
    debugLog(`STOPPED - bestIndex=${best}, chosen=${chosen}`);
    document.getElementById('result').innerHTML = `<div>${resultText}</div><div>${chosen}</div>`;
    document.getElementById('result').style.background = winningColor;
    document.getElementById('result').style.display = 'flex';
    
    // Create confetti celebration!
    createConfetti();
    
    // Reset center emoji back to normal size and opacity, facing upward
    const centerEmojiReset = document.querySelector('.center-emoji');
    centerEmojiReset.style.transition = 'none';
    centerEmojiReset.style.transform = 'scale(1) rotate(0deg)';
    centerEmojiReset.style.opacity = '1';
    
    // Reset buttons
    document.getElementById('spinBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    isSpinning = false;
  }
  
  window.stopWheel = stopWheel;
  
  function createConfetti() {
    const emojis = ['🎉', '✨'];
    for (let i = 0; i < 200; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
        
        // Remove confetti element after animation
        setTimeout(() => {
          if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
          }
        }, 1500);
      }, i * 10);
    }
  }
  
  function toggleDevLog() {
    const console = document.getElementById('debugConsole');
    if (console.style.display === 'none' || console.style.display === '') {
      console.style.display = 'block';
    } else {
      console.style.display = 'none';
    }
  }
  
  window.toggleDevLog = toggleDevLog;

  // Translation data
  const translations = {
    en: {
      title: "ADHD WHAT TO DO NEXT Wheel",
      subtitle: "Spin Now and Quit Procrastinating + Hating Yourself!",
      description: "Let fate decide what to do next so you can save your precious ADHD brain power",
      addButton: "➕ Add",
      clearButton: "🗑️ Clear All",
      spinButton: "🎲 SPIN THE WHEEL! 🎲",
      developerLog: "Developer Log",
      enterTask: "Enter a new task...",
      result: "Destiny had chosen...:",
      defaultTasks: [
        "📚 Read System Design Book",
        "📝 Modify Resume", 
        "💻 Practice Leetcode",
        "🚀 Build a Project (Vibe Coding)",
        "📖 Read a book of choice",
        "🎵 Enjoy Music",
        "🏃‍♂️ Exercise",
        "🧘‍♀️ Meditation time",
        "🎨 Creative project",
        "🧹 Do chores"
      ]
    },
    zh: {
      title: "ADHD 下一步做什么 转盘",
      subtitle: "现在开始转转盘，停止拖延 + 停止讨厌自己！",
      description: "让命运决定下一步做什么，这样你就可以节省宝贵的ADHD脑力",
      addButton: "➕ 添加",
      clearButton: "🗑️ 清空所有",
      spinButton: "🎲 转盘开始！🎲",
      developerLog: "开发者日志",
      enterTask: "输入新任务...",
      result: "✨ 命运选择了… ✨",
      defaultTasks: [
        "📚 读系统设计书",
        "📝 修改简历",
        "💻 练习力扣",
        "🚀 构建项目（氛围编程）",
        "📖 读一本自选书",
        "🎵 享受音乐",
        "🏃‍♂️ 运动",
        "🧘‍♀️ 冥想时间",
        "🎨 创意项目",
        "🧹 做家务"
      ]
    }
  };

  function setLanguage(lang) {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    
    if (lang === 'en') {
      langBtns[0].classList.add('active');
      updatePageLanguage('en');
      // Update URL
      const url = new URL(window.location);
      url.searchParams.delete('lang');
      window.history.replaceState({}, '', url);
    } else if (lang === 'zh') {
      langBtns[1].classList.add('active');
      updatePageLanguage('zh');
      // Update URL
      const url = new URL(window.location);
      url.searchParams.set('lang', 'zh');
      window.history.replaceState({}, '', url);
    }
  }
  
  function updatePageLanguage(lang) {
    const t = translations[lang];
    
    // Update page text
    document.querySelector('.title').textContent = t.title;
    document.querySelector('.subtitle').textContent = t.subtitle;
    document.getElementById('description').textContent = t.description;
    
    // Update buttons - need to find them by their onclick attributes
    const addBtn = document.querySelector('.btn');
    const clearBtn = document.querySelector('.btn-clear');
    const spinBtn = document.querySelector('.spin-button');
    const devLogBtn = document.querySelector('.dev-log-btn');
    
    if (addBtn) addBtn.textContent = t.addButton;
    if (clearBtn) clearBtn.textContent = t.clearButton;
    if (spinBtn) spinBtn.textContent = t.spinButton;
    if (devLogBtn) devLogBtn.textContent = t.developerLog;
    
    // Update input placeholder
    document.getElementById('taskInput').placeholder = t.enterTask;
    
    // Update result text if it's currently displayed
    const result = document.getElementById('result');
    if (result.style.display === 'flex') {
      const resultDivs = result.querySelectorAll('div');
      if (resultDivs.length >= 2) {
        resultDivs[0].textContent = lang === 'zh' ? '✨ 命运选择了… ✨' : '✨ Destiny had chosen... ✨';
      }
    }
    
    // Update default tasks
    tasks.length = 0;
    t.defaultTasks.forEach(task => tasks.push(task));
    
    // Force update the wheel to show translated options
    setTimeout(() => {
      updateWheel();
    }, 0);
  }
  
  window.setLanguage = setLanguage;
  
  function makeColorLighter(color) {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Make it lighter by increasing RGB values
    const lighterR = Math.min(255, r + 60);
    const lighterG = Math.min(255, g + 60);
    const lighterB = Math.min(255, b + 60);
    
    // Convert back to hex
    return `#${lighterR.toString(16).padStart(2, '0')}${lighterG.toString(16).padStart(2, '0')}${lighterB.toString(16).padStart(2, '0')}`;
  }
  
  // Initialize
  updateWheel();
  document.getElementById('stopBtn').disabled = true;
  
  // Check URL parameter for language
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam === 'zh') {
    setLanguage('zh');
  }
})(window, document); 