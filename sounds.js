// Sound effects for the wheel
class SoundManager {
  constructor() {
    this.spinSound = null;
    this.stopSound = null;
    this.resultSound = null;
    this.initSounds();
  }

  initSounds() {
    // Create audio context for web audio API
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  // Generate spinning sound using Web Audio API
  playSpinSound() {
    try {
      // Create oscillator for mysterious magical sound
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      // Set up mysterious magical sound (intense but short)
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.2);
      oscillator.frequency.exponentialRampToValueAtTime(900, this.audioContext.currentTime + 0.4);
      oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.6);
      oscillator.frequency.exponentialRampToValueAtTime(1500, this.audioContext.currentTime + 0.8);
      
      // Set up volume envelope (very short, intense)
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.5, this.audioContext.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.3, this.audioContext.currentTime + 0.8);
      gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 1.0);
      
      // Start and stop the sound (much shorter duration)
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 1.0);
      
    } catch (error) {
      console.log('Sound not supported:', error);
    }
  }

  // Generate stop sound
  playStopSound() {
    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      // Set up stop sound (quick ding)
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.1);
      oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.3);
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.4, this.audioContext.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.1, this.audioContext.currentTime + 0.3);
      gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.5);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.5);
      
    } catch (error) {
      console.log('Sound not supported:', error);
    }
  }

  // Generate result sound
  playResultSound() {
    try {
      // Create oscillator for simple celebration sound
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      // Set up simple "yay" celebration sound
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1000, this.audioContext.currentTime + 0.1);
      oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.2);
      oscillator.frequency.exponentialRampToValueAtTime(1400, this.audioContext.currentTime + 0.3);
      
      // Volume envelope for quick celebration
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.6, this.audioContext.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.4, this.audioContext.currentTime + 0.3);
      gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.5);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.5);
      
    } catch (error) {
      console.log('Sound not supported:', error);
    }
  }
}

// Initialize sound manager
const soundManager = new SoundManager(); 