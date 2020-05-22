<template>
  <div class="center">
    <div class="container">
      <div class="form-group">
        <!-- display the fruit's image -->
        <div class="fruitImg">
          <img :src="fruitImgURL" :alt="fruits[currentFruit].name" />
        </div>

        <!-- display the fruit's title -->
        <span v-text="fruits[currentFruit].name"></span>

        <!-- display the currently selected fruit's array key -->
        <span class="badge" v-text="currentFruit"></span>
      </div>

      <div class="form-group">
        <p>Click left or right on your keypad!</p>
      </div>
    </div>
  </div>
</template>

<style>
body {
  padding: 50px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  padding: 40px 80px 15px 80px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 176px;
  text-align: center;
}
.heading {
  text-align: center;
}
h4 {
  color: lighten(#5c3d86, 30%);
  text-align: center;
  margin: 0 0 35px 0;
  font-weight: 400;
  font-size: 24px;
}
.form-group {
  margin-bottom: 25px;
}
.fruitImg img {
  width: 100px;
  margin-bottom: 15px;
}
</style>

<script>
export default {
  name: "Fruits",
  data: function() {
    return {
      fruits: [
        { name: "Apple", image: "apple.svg" },
        { name: "Banana", image: "banana.svg" },
        { name: "Cherries", image: "cherries.svg" },
        { name: "Grapes", image: "grapes.svg" },
        { name: "Lemon", image: "lemon.svg" },
        { name: "Orange", image: "orange.svg" },
        { name: "Pear", image: "pear.svg" },
        { name: "Strawberry", image: "strawberry.svg" },
        { name: "Watermelon", image: "watermelon.svg" }
      ],
      currentFruit: 0
    };
  },
  mounted: function() {
    // Lets add in support for arrow key navigation
    window.addEventListener(
      "keydown",
      function(e) {
        if (e.keyCode === 37) {
          this.previous();
        }
        if (e.keyCode === 39) {
          this.next();
        }
      }.bind(this)
    );
  },
  computed: {
    fruitImgURL: function() {
      return (
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/" +
        this.fruits[this.currentFruit].image
      );
    }
  },
  methods: {
    // navigate to next fruit
    next() {
      if (!(this.currentFruit >= this.fruits.length - 1)) this.currentFruit++;
    },

    // navigate to previous fruit
    previous() {
      if (this.currentFruit >= 0) this.currentFruit--;
    },

    // check if the button is disabled
    isDisabled(dir = "previous") {
      if (dir == "next") {
        return this.currentFruit >= this.fruits.length - 1;
      } else {
        return this.currentFruit == 0;
      }
    }
  }
};
</script>
