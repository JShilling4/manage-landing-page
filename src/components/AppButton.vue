<template>
    <button class="button" :style="styleObject">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "AppButton",
    props: {
        showShadow: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            styleObject: {
                boxShadow: this.showShadow
                    ? "0 13px 15px -13px rgb(242, 95, 58)"
                    : "",
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.button {
    font-family: "Be Vietnam", sans-serif;
    padding: 1.4rem 3.4rem 1.6rem;
    border: none;
    border-radius: 3rem;
    outline: none;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.8);
    background-color: $red-bright;
    cursor: pointer;
}
</style>