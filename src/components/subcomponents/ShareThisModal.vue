<template>
    <transition appear enter-active-class="animated slideInUp" leave-active-class="animated slideOutUp">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="sharethis-inline-share-buttons"></div>
                    
                    <slot name="footer">
                        <button class="modal-default-button" @click="$emit('close')">Close</button>
                    </slot>
                    
                </div>
            </div>
        </div>
    </transition>
</template>

<style>
.modal-mask{
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0, .8);
}
</style>