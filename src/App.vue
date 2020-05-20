<template>
  <mark-display
    ref="main"
    :markdown="markdown"
    @title="empyreanProject"
    keyboard-ctrl
    url-hash-ctrl
    auto-font-size
    auto-blank-target
  ></mark-display>
</template>

<script>
import MarkDisplay from "vue-mark-display";
import Hammer from "hammerjs";

const markdown = `### Hello, My name is Travis
*use arrow keys to navigate(desktop)

*swipe left to nativate(mobile)

----
This was my first attempt at making a slideshow website.

----

Oddly this was one of the hardest things I ever had to build.

----

I really appreciate the oppertunity to interview with Empyrean.

----

If anything it was a great experience talk with the both of you, Wendy and Carlos.

----

Carlos, it is great to see another *neovim* user out in the wild :)`;

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
body {
  margin: 0;
  overflow: hidden;
}
</style>
