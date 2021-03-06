<template>
    <div v-show="data.youtubeVideo.open" class="box" v-bind:style="CenterBox" v-draggable="draggableValue">
        <div class="box_head" :ref="handleId">
            <div class="box_edit" v-if="data.youtubeVideo.itemId != 0" v-on:click="Edit"></div>
            <div class="box_cross" v-on:click="Close"></div>
                    Youtube Video
        </div>  
        <YoutubeVideoComponent/>
        <YoutubeEditComponent/>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Draggable } from 'draggable-vue-directive';
import Store from '@/store/Store';
import YoutubeVideoComponent from './YoutubeVideoComponent.vue';
import YoutubeEditComponent from './YoutubeEditComponent.vue';

@Component({
    components: {
        YoutubeVideoComponent,
        YoutubeEditComponent
    },
    directives: {
    Draggable,
  }
})
export default class YoutubeComponent extends Vue {
    data() {
      return { 
          data: Store.GetInstance(),
          handleId: "drag-yt",
          draggableValue: {
            handle: undefined
          }
      }
    }

    mounted() {
      this.$data.draggableValue.handle = this.$refs[this.$data.handleId];
    }

    Close (): void {
        Store.GetInstance().youtubeVideo.open = false;
    }

    Edit(): void {
        Store.GetInstance().youtubeVideo.editMode = true;
    }

    CenterBox() {
            let Width: number = 560;
            let cWi: number = ((window.innerWidth || (document != null && document.documentElement != null && document.documentElement.clientWidth) || document.body.clientWidth) / 2) - (Width / 2);
            let cHe: number = Math.floor((((window.innerHeight || (document != null && document.documentElement != null && document.documentElement.clientHeight) || document.body.clientHeight) / 2) / 100) * 60);
      
            return { left: cWi + "px", top: cHe + "px" };
    }
}
</script>

<style lang="scss">
.box {
    display: block;
    position: absolute;
    z-index: 1000;
    width: auto;
    height: auto;
    cursor: default;

    border: solid 1px #000;
    border-bottom: solid 3px;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    border-radius:8px;
    .box_head {
        display: block;
        background-color: #367897;
        border: solid 2px #408caf;
        border-bottom: solid 1px #000000;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        font-size: 1.2em;
        line-height: 30px;
        text-align: center;
        color: #FFFFFF;
        font-weight: bold;
    }
    .box_body {
        display: block;
        height: 100%;
        background-color: #eceae0;
        border: solid 2px #ffffff;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        overflow: hidden;
    }
    .box_cross {
        background-image: url('~@/assets/close.png');
        position: absolute;
        top: 7px;
        right: 7px;
        width: 19px;
        height: 20px;
        cursor: pointer;
        &:hover {
            background-image: url('~@/assets/close_hover.png');
        }
        &:active {
            background-image: url('~@/assets/close_active.png');
        }
    }
    .box_edit {
        background-image: url('~@/assets/edit.png');
        position: absolute;
        top: 7px;
        right: 30px;
        width: 19px;
        height: 20px;
        cursor: pointer;
        &:hover {
            background-image: url('~@/assets/edit_hover.png');
        }
        &:active {
            background-image: url('~@/assets/edit_active.png');
        }
    }
    .box_form {
        padding: 10px 17px;
        line-height: 22px;
    }
    .box_field {
        display: block;
    }
    label {
        display: block;
        font-weight: 900;
        margin-left: 2px;
    }
    select {
        box-sizing: border-box;
        width: 100%;
        height: 22px;
        color: #0d0d0d;
        border: 1px solid #000000;
        border-radius: 3px;
        background-color: #fbfbf9;
        line-height: 17px;
        resize: none;
        overflow: hidden;
        &:focus {
            outline: none;
        }
    }
    .box_input_number {
        display: block;
        box-sizing: border-box;
        float: left;
        margin-right: 5px;
        width: 23px;
        height: 21px;
        color: #0d0d0d;
        border: 1px solid #959595;
        background-color: #fbfbf9;
        line-height: 17px;
        &:focus {
            outline: none;
        }
    }
    .box_checkbox {
        padding: 10px;
    }
    .box_textarea {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        color: #0d0d0d;
        border: 1px solid #959595;
        background-color: #fbfbf9;
        line-height: 17px;
        resize: none;
        overflow: hidden;
        &:focus {
            outline: none;
        }
    }
    .box_input {
        box-sizing: border-box;
        width: 100%;
        height: 21px;
        color: #0d0d0d;
        border: 1px solid #959595;
        background-color: #fbfbf9;
        line-height: 17px;
        &:focus {
            outline: none;
        }
    }
    .box_button {
        display: block;
        width: 100%;
        padding: 7px;
        margin: 5px auto;
        background-image: -webkit-linear-gradient(#f3f3f3 50%, #d9d9d9 50%);
        box-shadow: 0 1px 0 #d9d9d9 inset, 1px 0 #d9d9d9 inset, -1px 0 #d9d9d9 inset, 0 1px 0 #000;
        border-radius: 4px;
        border: 1px solid #000;
        font-weight: bold;
        color: #000;
        text-decoration: none;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        &:hover {
            background-image: -webkit-linear-gradient(#F2F2F2 50%, #E1E1E1 50%);
            box-shadow: 0 1px 0 #E1E1E1 inset, 1px 0 #E1E1E1 inset, -1px 0 #E1E1E1 inset, 0 1px 0 #000;
        }
        &:active {
            background-image: -webkit-linear-gradient(#d2d2d2 50%, #989898 50%);
            box-shadow: 0 1px 0 #989898 inset, 1px 0 #989898 inset, -1px 0 #989898 inset, 0 1px 0 #000;
        }
        &:focus {
            outline: none;
        }
    }
    .disabled {
        cursor: auto;
        background-image: -webkit-linear-gradient(#d4d4d4 50%, #b7b7b7 50%);
        box-shadow: 0 1px 0 #b7b7b7 inset, 1px 0 #b7b7b7 inset, -1px 0 #b7b7b7 inset, 0 1px 0 #000;
        &:hover {
            background-image: -webkit-linear-gradient(#d4d4d4 50%, #b7b7b7 50%);
            box-shadow: 0 1px 0 #b7b7b7 inset, 1px 0 #b7b7b7 inset, -1px 0 #b7b7b7 inset, 0 1px 0 #000;
        }
        &:active {
            background-image: -webkit-linear-gradient(#d4d4d4 50%, #b7b7b7 50%);
            box-shadow: 0 1px 0 #b7b7b7 inset, 1px 0 #b7b7b7 inset, -1px 0 #b7b7b7 inset, 0 1px 0 #000;
        }
    }
    nav {
        position: relative;
        width: 100%;
        float: left;
        .nav_sub {
            float: left;
            position: relative;
            background-color: #c3c2b8;
            font-size: 1.2em;
            padding: 10px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border: 1px solid #4d4c49;
            border-bottom: 1px solid #000;
            cursor: pointer;
            &:hover {
                border-bottom: 1px solid #eceae0;
                background-color: #f6f5f0;
                box-shadow: 1px 1px 2px #fff inset;
            }
        }
        .bottom_lign {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            border-bottom: 1px solid #000;
        }
        .active {
            border: 2px solid #000;
            border-bottom: 2px solid #eceae0;
            background-color: #eceae0;
            padding: 9px;
            box-shadow: 1px 1px 2px #fff inset;
            &:hover {
                border-bottom: 2px solid #eceae0;
                background-color: #eceae0;
            }
        }
    }
}
</style>