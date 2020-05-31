<template>
    <transition name="modal">
        <div class="modalSearch">
            <h1>Search</h1>
            pihpihpihpihpihp
              <button class="modal-default-button" @click="$emit('close')">OK</button>
        </div>
    </transition>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.modalSearch{
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
}


.modal-enter {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>