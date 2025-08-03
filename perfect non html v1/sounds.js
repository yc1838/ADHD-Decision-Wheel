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
      // Create oscillator for spinning sound
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      // Set up spinning sound (magical whoosh)
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.5);
      oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 1);
      oscillator.frequency.exponentialRampToValueAtTime(300, this.audioContext.currentTime + 1.5);
      oscillator.frequency.exponentialRampToValueAtTime(500, this.audioContext.currentTime + 2);
      oscillator.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 2.5);
      
      // Set up volume envelope
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.1, this.audioContext.currentTime + 2.5);
      gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 3);
      
      // Start and stop the sound
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 3);
      
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
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      // Set up result sound (victory chime)
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(523, this.audioContext.currentTime); // C
      oscillator.frequency.setValueAtTime(659, this.audioContext.currentTime + 0.2); // E
      oscillator.frequency.setValueAtTime(784, this.audioContext.currentTime + 0.4); // G
      oscillator.frequency.setValueAtTime(1047, this.audioContext.currentTime + 0.6); // C (high)
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.1, this.audioContext.currentTime + 0.8);
      gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 1);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 1);
      
    } catch (error) {
      console.log('Sound not supported:', error);
    }
  }
}

// Initialize sound manager
const soundManager = new SoundManager(); 