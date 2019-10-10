<template>
  <div class="digit-roll-wrapper">
    <ul
      ref="list"
      class="digit-roll-list"
    >
      <li
        v-for="(item, i) of digitArr"
        :key="i"
        class="digit-roll-item"
      >
        <div
          v-if="judgeNum(item)"
          class="digit-roll-bar"
          v-html="innerUnitHtml"
          :style="getBarStyle(item, i)"
        ></div>

        <div
          v-else
          class="digit-roll-commas"
        >
          {{ commas }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { addCommas } from './util';

export default {
  name: 'DigitRoll',
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    duration: {
      type: Number,
      default: 100,
    },
  },
  data() {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const divList = numArr.map((n, i) => `<span>${i}</span>`);

    return {
      commas: ',',
      innerUnitHtml: divList.concat(divList).join(''),
      offsetArr: [],
    };
  },
  computed: {
    digitArr() {
      const digitWithCommas = addCommas(this.value);
      return digitWithCommas.split('');
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.$nextTick(() => {
          this.startScroll();
        });
      },
    },
  },
  methods: {
    judgeNum(num) {
      if (num === this.commas) {
        return false;
      }

      return true;
    },
    getBarStyle(item, i) {
      return {
        top: this.offsetArr[i] + 'px',
      };
    },
    startScroll() {
      this.digitArr.forEach((item, i) => {
        setTimeout(() => {
          this.$set(this.offsetArr, i, -Number(item) * 75 - 750);
        }, i * 100);
      });
    },
  },
};
</script>

<style lang="scss">
.digit-roll-list {
  display: flex;
}

.digit-roll-item {
  position: relative;
  width:61px;
  height:75px;
  margin: 0px 3px;
  text-align: center;
  overflow: hidden;
  background: url(./num-bg.png) no-repeat;
}

.digit-roll-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 2s ease-in-out;
}

.digit-roll-bar span {
  display: block;
  width: 100%;
  height: 100%;
  color: #ddf0ff;
  font-size: 58px;
  letter-spacing: normal;
  word-spacing: normal;
}

.digit-roll-commas {
  display: block;
  width: 100%;
  height: 100%;
  color: #ddf0ff;
  font-size: 54px;
  letter-spacing: normal;
  word-spacing: normal;
}
</style>
