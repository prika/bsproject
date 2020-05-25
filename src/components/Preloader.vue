<template>
    <div class="loader">
        <h1>bloco</h1>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
.loader{
    background: #DEDEDE;
    position: fixed;
    z-index: 4;
    top: 400px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;


    h1{
      color: #FFF;
      font-size: 218px;
      
    }
}
</style>