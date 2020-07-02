<template>
    <div class="col-12 col-md-4 social-icons d-flex align-items-center">
        <a v-for="item in social" 
        :href="item.link" 
        :key="item.id"
        :class="item.code+' order-'+item.order"
        :aria-label="$t('social-arialabel')+item.name"
        :alt="$t('social-arialabel')+item.name"
        target="_blank" rel="noopener noreferrer nofollow"></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            social: []
        }
    },
    created() {
      this.$eventBus.$on('jsonGlobalLoaded', (response) => {
          this.social = response.data.footer.social
      });
    }
}
</script>