<template>
    <div class="testimonial">
        <img 
            :src="require(`@/assets/images/${testimonial.avatar}`)"
            class="testimonial__avatar" 
            alt=""
        >
        <h3 class="testimonial__name heading">
            {{ testimonial.name }}
        </h3>
        <p class="testimonial__quote subtext">
            {{ testimonial.quote }}
        </p>
    </div>
</template>

<script>
export default {
    name: "TestimonialCard",
    props: {
        testimonial: {
            type: Object,
        },
    },
};
</script>

<style lang="scss" scoped>
.testimonial {
    position: relative;
    min-width: 33%;
    height: 100%;
    padding: 5rem;
    margin: 0 2rem;
    text-align: center;
    background-color: $gray-light;
    box-shadow: 0 1rem 2rem rgba(0,0,0,.4);
    &__avatar {
        position: absolute;
        top: -5rem;
        left: 50%;
        width: 10rem;
        transform: translateX(-50%);
    }
    &__name {
        margin: 2rem 0;
    }
    &__quote {
        font-size: 2rem;
    }
}
</style>