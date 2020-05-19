<template>
    <header>
      <div class="containerHeader d-flex">
          <div class="logo col-lg-2 col-md-1">
              <a rel="nofollow" href="/"><img src="../assets/images/logo.svg" itemprop="logo" alt="B Stone" /></a>
          </div>

          <nav class="menu d-flex">
              <ul class="list-unstyled" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
                <li itemprop="name">
                    <a href="/" itemprop="url">Institucional</a>
                </li>
                <li itemprop="name">
                    <a href="/" itemprop="url">Bloco B</a>
                </li>
                <li itemprop="name">
                    <a href="/" itemprop="url">B Explore</a>
                </li>
                <li itemprop="name">
                    <a href="/" itemprop="url">B Project</a>
                </li>
                <li itemprop="name">
                    <a href="/" itemprop="url">B Innovation</a>
                </li>
              </ul>
          </nav>

          <div class="controls ml-auto d-flex">
              <div class="languageLinks"> 
                <a href="#" class="active">Portugal</a>  
                <a href="#">English</a>
              </div>
              <a class="buttons searchLink" href="#"></a>
              <a class="buttons accountLink" href="#"></a>
              <a class="buttons cartLink" href="#"></a>

          </div> 

          <Icon />
      </div>
    </header>
</template>

<script>
import Icon from '../assets/images/icons/search.svg';

export default {
  name: 'Header',
  // props: {
  //   msg: String
  // },
  components: {
    Icon
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 124px;
  background: #fff;

  .containerHeader {
    display: flex;
    flex-direction: row;
  }

  .logo{
    padding: 22px 0;
    text-align: center;
  }

  nav.menu ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
    

      & li {

        margin-right: 18px;
        position: relative;

        &:not(:last-child):after {
          display: block;
          content: "";
          background-color: #A7A7A7;
          width: 18px;
          height: 1px;
          position: absolute;
          top: 50%;
          right: -18px;
        }

        a {
          font-size: 20px;
          font-size: 1rem;
          padding: 10px 22px;
          font-weight: 300;
        }

      }
  }

  .controls {
      font-size: 13px;
      display: block;

      & .languageLinks{
        
        border-left: 1px solid #E8E8E8;
        white-space: nowrap;
        padding: 52px 22px;
        

        & a {
            //font-family: $font-family-sans-serif;
            // font-weight: normal;
            //color: $secondary-menu-link-color;
            //text-decoration: $secondary-menu-link-decoration;
            text-transform: uppercase;

            &:hover, &.active {
                //color: #B7B7B7;
            }
        }
        
      }

      & .buttons{
        border-left: 1px solid #E8E8E8;
        width: 124px;
        background: center center no-repeat url(../assets/images/icons/search.svg);

        &.accountLink{
            background-image: url(../assets/images/icons/user.svg);
        }

        &.cartLink{
            background-image: url(../assets/images/icons/cart.svg);
        }
      }
  }
}
</style>
