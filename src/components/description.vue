<template>
    <div class="vue-description">
      <p class="vue-description-remark" :class="remarkClass" >
        {{desc}}
      </p>
      <div class="vue-description-more " v-show="hasMore" v-on:click="toggleMore()"></div>
    </div>
</template>

<script>

  export default {
    data(){
      return {
        remarkClass: '',
        hasMore: false,
      }
    },
    props: {
      className: {
        type: String
      },
      line: {
        type: String,
        default: 3
      },
      desc: {
        type: String,
        default: ''
      }
    },
    methods: {
      toggleMore(){
        this.hasMore = false;
      }
    },
    watch: {
      'hasMore': function (inItem) {
        this.hasMore ? this.remarkClass = 'lc-' + this.line + ' ' + this.className : this.remarkClass = this.className;
      }
    },
    mounted(){
      if (this.desc.length > (parseInt(this.line) * 28) || this.desc.split(`\n`) > parseInt(this.line)) {
        this.hasMore = true;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

  .vue-description {
    &-remark {
      word-break: break-all;
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      font-size: .28rem;
      line-height: .42rem;
      color: #333;
      transition: all 1s;
    }
    &-more {
      height: .6rem;
      text-align: center;
      line-height: .6rem;
      &:after {
        content: '';
        width: .22rem;
        height: .22rem;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjUzNzFDNzEwNTExRTdBRTE4QkMwRTMzN0I2MTExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwNjUzNzFENzEwNTExRTdBRTE4QkMwRTMzN0I2MTExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA2NTM3MUE3MTA1MTFFN0FFMThCQzBFMzM3QjYxMTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDA2NTM3MUI3MTA1MTFFN0FFMThCQzBFMzM3QjYxMTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59zfaFAAAC1UlEQVR42sSWV08UYRSGZ4fF+g/2H3hhvNiEW7ErFrBgRYM1GkNIDMYLL4x3RmNiYiBYwN4bGhsaFUVQAVsMINHYUOwEVLCivid5N5kMOztndgb4kmeZ7Hx8+3ztnBOKRqPrDMNYb/RdW5ASiUQq8JAKrvaBQA7YZeKjBawFG3pZYC7YDTpFIh00gzVgUy8JzAZ7wXeQIRJPKPISFIAtINSDAjPBfvBDBMBNky+eUeQFyAdbe0gkGxwEPylQKV+alg4iMJxCK0FRwCIzbAI3Yi9MW8dXFJEtWg62x+mTTJtOgV9gErhufRnvB15za5rAElACUnwITKPAbzAFXLN3cJplC0UaQa7c5SRFssAh8IfPV+J1SrTU7yhSD+aDfR5FZNZHQBeYCi47dXTb7w9gBHgI5nBWqQoB2fdj4C8FLiXqrDl0H8EocJ9XTET6JegvJ/8E+EeBcrcf0J78z2A0uMuTftRBZAI4xWcRuKgZXCQ2KkVaKVIDMsFJ0N/yfrxN4IJy3KUisRpsVgamNjAWVIOJoAwMAOMoEOJKndcKgG1hRspVPHD53MtErZ3Lfo6zl8AzlKsqZ+asUmCxCMh4sSz6HOSBQuWKfKGIhN40Xt1Z4IxSYBHYwXHGmMyeEqqfghWgWCnyjSLlvL5lSoGFVgFQF+aLZq6IRLRlIMy/XS4DdnJLtC2XAl95jmrtV/QNA9NjLlepz5zRrZYEOy0reMcpTrzlijTwn/YEJJLDSXUwmN1yC1bvKfIIzAMHuD2+a0kKVGsjpoTqkeABT71bqFbVkqDKa9j+xJxxj1XRYY8i3WrJZHNHK0XqGIqPK0Xi1pJ+Elgbc8ZtMNkSqj3Xkn6zaDvvdRWvl4gM9FpL+pWwhupKCkmIHuSllgxCwmCkE5EKbpEkscHaWtKpJXP/O5jGT1NEtmiIppYMaiWsOSOTyWuYtpYMWiImksVDqqolndp/AQYA/26+9/6uikwAAAAASUVORK5CYII=");
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
      }

    }
  }

  .lc-1 {
    -webkit-line-clamp: 1;
  }

  .lc-2 {
    -webkit-line-clamp: 2;
  }

  .lc-3 {
    -webkit-line-clamp: 3;
  }

  .lc-4 {
    -webkit-line-clamp: 4;
  }

  .lc-5 {
    -webkit-line-clamp: 5;
  }

  .lc-6 {
    -webkit-line-clamp: 6;
  }
</style>
