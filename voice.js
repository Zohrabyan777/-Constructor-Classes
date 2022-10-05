const voiceDog = document.querySelector("#dogVoice");
const voiceBird = document.querySelector("#birdVoice");
const voiceTiger = document.querySelector("#tigerVoice");
const imgdog = document.querySelector("#dog");
const imgBird = document.querySelector("#bird");
const imgTiger = document.querySelector("#tiger");

class Animal {
  constructor(animal) {
    this.animal = animal;
  }
  say() {
    if (this.animal == "dog") {
      console.log("haf-haf");
    } else if (this.animal == "bird") {
      console.log("chxchx");
    } else if (this.animal === "tiger") {
      console.log("wuf-wuf");
    } else console.log("error");
  }
  voic() {
    if (this.animal === "dog") {
      voiceDog.play();
    } else if (this.animal === "bird") {
      voiceBird.play();
    } else if (this.animal === "tiger") {
      voiceTiger.play();
    }
  }
}
const dog = new Animal("dog");
const cat = new Animal("cat");
const bird = new Animal("bird");
imgdog.addEventListener("mouseenter", () => {
  voiceDog.play();
});
imgBird.addEventListener("mouseenter", () => {
  voiceBird.play();
});
imgTiger.addEventListener("mouseenter", () => {
  voiceTiger.play();
});

imgBird.addEventListener("mouseleave", () => {
  voiceBird.pause();
});
imgdog.addEventListener("mouseleave", () => {
  voiceDog.pause();
});
