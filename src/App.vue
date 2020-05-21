<template>
  <mark-display
    ref="main"
    :markdown="markdown"
    @title="presentation"
    keyboard-ctrl
    auto-blank-target
  ></mark-display>
</template>

<script>
import MarkDisplay from "vue-mark-display";
import Hammer from "hammerjs";

const markdown = `# Hello, My name is Travis

*use arrow keys to navigate(desktop)

*swipe left to navigate(mobile)

----
The Framework I chose was _Vue.js_

----

Pros

* Tiny size
* Detailed documentation
* Adaptability
* Awesome integration

----

Cons

* Lack of resources
* Risk over flexibility

----

Design Considerations

A lot of my choices came down to:

1. How can I get this off the ground?
2. What is the simplest design I can implement for easy developer understanding?
3. How will I get the keyboard to move between pages?

----

Challenges

I have never done a presentation website before, so the biggest challenge was just getting it off the ground.

There was more to learn in this project then I had thought, going forward on something like this at least I am prepared.

----

Thank you for your time.

Travis Boss

travisboss@gmail.com`;

export default {
  components: { MarkDisplay },
  data() {
    return { markdown };
  },
  methods: {
    setTitle({ title }) {
      document.title = title;
    }
  },
  mounted() {
    const mc = new Hammer(this.$el);
    const main = this.$refs.main;
    mc.on("swipe", event => {
      if (event.pointerType === "mouse") {
        return;
      }
      switch (event.direction) {
        case Hammer.DIRECTION_LEFT:
          main.goNext();
          return;
        case Hammer.DIRECTION_RIGHT:
          main.goPrev();
          return;
      }
    });
  }
};
</script>

<style>
* {
  font-size: 30px;
}
body {
  margin: 0;
  overflow: hidden;
  background-color: skyblue;
}
</style>
