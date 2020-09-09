/*!
 * readingTime v1.0.0
 * Script showing the reading time of the articles to the user (showing them as seconds, minutes, hours, days).
 * (c) 2020 Ahmet Aksungur
 * MIT License
 * https://github.com/Ahmetaksungur
 */

class readingTime {
    constructor(options) {
      this.opt = options || {};
      this.read = this.opt.read;
      this.result = this.opt.result;
      this.second = this.opt.second ? this.opt.second : 50;
      this.minute = this.opt.minute ? this.opt.minute : 60;
      this.hour = this.opt.hour ? this.opt.hour : 3600;
      this.day = this.opt.day ? this.opt.day : 86400;
      this.secondText = this.opt.secondText ? this.opt.secondText : "Sec Read";
      this.minuteText = this.opt.minuteText ? this.opt.minuteText : "Min Read";
      this.hourText = this.opt.hourText ? this.opt.hourText : "Hour Read";
      this.dayText = this.opt.hourText ? this.opt.hourText : "Day Read";
      this.speed = this.opt.speed ? this.opt.speed : 1; // the number of words read per second
      this.init();
    }
  
    init() {
      this.content = document.querySelectorAll(this.read)[0];
      this.lenghts = this.content.textContent.split(" ").length;
      this.el = document.querySelectorAll(this.result)[0];
      this.val = Math.ceil(this.lenghts / this.speed);
      this.secondVal = Math.ceil(this.val);
      this.minuteVal = Math.ceil(this.val / this.minute);
      this.hourVal = Math.floor(this.val / this.hour);
      this.dayVal = Math.floor(this.val / this.day);
      this.reading();
    }
  
    reading() {
      var result;
      if (this.val < this.second) {
        result = this.secondVal + " " + this.secondText;
        this.el.innerText = result;
      } else if (this.val < this.hour) {
        result = this.minuteVal + " " + this.minuteText;
        this.el.innerText = result;
      } else if (this.val > this.day) {
        result = this.dayVal + " " + this.dayText;
        this.el.innerText = result;
      } else {
        result = this.hourVal + " " + this.hourText;
        this.el.innerText = result;
      }
    }
  }