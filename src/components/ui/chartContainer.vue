<template>
    <div>
        <p class="uppercase">{{itemname}}</p>
        <figure class="chart" :data-percent="datapercent">
            <svg width="89.926" height="89.923" viewBox="0 0 89.926 89.923">
                <text id="text" transform="translate(47 50.793)" fill="#333" font-size="15" font-family="Oswald-Medium, Oswald" font-weight="500" letter-spacing="0.03em">
                <tspan x="-11.401" y="0">{{datapercent}}</tspan>
                <tspan y="0" font-size="8.75" baseline-shift="4.999500156940817">%</tspan></text>
                <path d="M-19498.4,3474.4l35.063,35.062-35.062,35.062-35.062-35.062Z" transform="translate(19543.959 -3463.896)" fill="none" stroke="#FFF" stroke-width="14"/>
                <path class="containerFull" d="M-19498.4,3474.4l35.063,35.062-35.062,35.062-35.062-35.062Z" 
                    transform="translate(19543.959 -3463.896)" fill="none" stroke-width="14" 
                    :stroke-dasharray="datapercent*2+', 283'"/>
            </svg>
        </figure>
    </div>
</template>
<script>
export default {
    props: {
        datapercent: {
            type: Number,
            default: 0
        },
        itemname: {
            type: String,
            default: '0'
        }
    }
}
</script>
<style lang="scss">
.containerFull {
    fill: none;   
    stroke: #333;
    stroke-width: 14;
    stroke-linecap: square;
    animation: progress .5s ease-out forwards;
}
</style>