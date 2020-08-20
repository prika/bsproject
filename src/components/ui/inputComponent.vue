<template>
<div class="input_group" :class="hasError">
    <input  type="text"
            :id="id" placeholder=" ">
    <label :for="id">{{placeholder}}</label>
    <p class="errormessage"><slot></slot></p>
</div>
</template>

<script>
export default {
    props: {
        id: {
            type: String
        },
        placeholder: {
            type: String
        },
        hasError: {
            type: String
        }
    }
}
</script>

<style lang="scss">
.input_group {
  position: relative;
  margin: 10px 0 30px 0;
  float: left;
  width: 100%;

    &:before{
        position: absolute;
        content: '';
        height: 1px;
        width: 100%;
        padding: 0 10px;
        bottom: 0;
        background: #333;
    }

    input[type=text],
    input[type=email], 
    input[type=password],
    input[type=tel], 
    input[type=search],
    input[type=file],
    textarea,
    select {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 200;
        -webkit-appearance: none;
        -moz-appearance: none;
        border-radius: 0;
        border: none;
        background: none;
        display: block;
        padding: 10px 0;
        width: 100%;
        font-size: 1em;
        
        &:focus { outline: none; }
    }

    select {
        -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
        -moz-appearance: none; /* Remove estilo padrão do FireFox */
        appearance: none; /* Remove estilo padrão do FireFox*/

        &::-ms-expand {display: none;} /* Remove seta padrão do IE*/
    }

    label{
      font-family: 'Ubuntu', sans-serif;
      position: absolute;
      pointer-events: none;
      left: 0;
      top: 10px;
      //padding-left: 15px;
      will-change: top, font-size, font-weight;
      -webkit-transition: top 0.3s ease 0.1s, font-size 0.3s ease 0.05s, font-weight 0.3s ease;
      -moz-transition:    top 0.3s ease 0.1s, font-size 0.3s ease 0.05s, font-weight 0.3s ease;
      -o-transition:      top 0.3s ease 0.1s, font-size 0.3s ease 0.05s, font-weight 0.3s ease;
      transition:         top 0.3s ease 0.1s, font-size 0.3s ease 0.05s, font-weight 0.3s ease;

    }

    .bar {
        position: relative;
        display: block;
        width: 100%;

        &:before {
          content: '';
          height: 2px;
          width: 0;
          bottom: 0;
          position: absolute;
          background: #333;
          will-change: width;
          -moz-transition:    width 0.3s ease;
          -o-transition:      width 0.3s ease;
          -webkit-transition: width 0.3s ease;
          transition:         width 0.3s ease;
        }
    }

    input:focus,
    textarea:focus,
    select:focus,
    input:active,
    textarea:active,
    select:active,
    input:not(:placeholder-shown),
    textarea:not(:placeholder-shown) {
      
      ~ label{
        top: -14px;
        font-size: 13px;
        font-weight: 600;
      }

      // ~ .bar:before {
      //   //background: #fff;
      //   width: 100%;
      // }
    }

    .errormessage{
      color: #FA0B4C;
      font-weight: 200;
      font-size: 14px;
      position: absolute;
      left: 0;
      bottom: -43px;
      opacity: 0;
    }

    &.error{

      &:before{
        background: #FA0B4C;
      }

      .errormessage {
        opacity: 1;
      }
    }
}


.revertColor .input_group {
  padding: 0;
  color: #FFF;

  input{
    border: none;
    outline: 0;
    color: #FFF;
  }

  &::before,
  & .bar::before{ background: #fff; }
}

</style>