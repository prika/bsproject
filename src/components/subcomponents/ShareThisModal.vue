<template>
    <transition appear enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
        <div class="modal-mask-share">

            <transition appear enter-active-class="animated slideInDown faster" leave-active-class="animated slideOutUp faster">
                <button class="closebutton" @click="$emit('close')"><closeIcon /></button>
            </transition>

            <div class="modal-container">
                <div class="addthis_inline_share_toolbox"></div>
            </div>
        </div>
    </transition>
</template>

<script>
import closeIcon from '@/components/ui/closeIcon.vue'

export default {
    name: 'modalShare',
    components:{
        closeIcon
    },
    mounted() {
        var addthis = document.createElement('script');
        addthis.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5efe1e4cb34f2512";
        var firstAddthisTag = document.getElementsByTagName('script')[0];
        firstAddthisTag.parentNode.insertBefore(addthis, firstAddthisTag); 
    },
    updated() {
         var addthis = document.createElement('script');
        addthis.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5efe1e4cb34f2512";
        var firstAddthisTag = document.getElementsByTagName('script')[0];
        firstAddthisTag.parentNode.insertBefore(addthis, firstAddthisTag); 
    }

}
</script>

<style lang="scss">
.modal-mask-share{
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fafafa;

    .modal-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
}
</style>