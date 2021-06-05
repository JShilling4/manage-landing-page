<template>
    <main>
        <TheNavbar
            class="container"
            :show-mobile-menu="showMobileMenu || windowWidth > 768"
            @open="showMobileMenu = true"
            @close="showMobileMenu = false"
        />

        <section class="hero">
            <div class="overlay"></div>
            <div class="content container">
                <div class="col1">
                    <h1 class="heading">
                        Bring everyone together to build better products.
                    </h1>

                    <p class="subtext">
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping larger teams in view.
                    </p>

                    <AppButton>Get Started</AppButton>
                </div>

                <div class="col2">
                    <img
                        src="@/assets/images/illustration-intro.svg"
                        alt
                    />
                </div>
            </div>
        </section>

        <section class="about">
            <div class="overlay"></div>
            <div class="content container">
                <div class="col1">
                    <h2 class="heading">
                        What's different about Manage?
                    </h2>
                    <p class="subtext">
                        Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                    </p>
                </div>
                <div class="col2">
                    <div class="about-item">
                        <AppButton
                            :showShadow="false"
                            :showHoverEffect="false"
                            min-width="7rem"
                        >01</AppButton>
                        <div>
                            <h3 class="about-item__heading heading">
                                Track company-wide progress
                            </h3>
                            <p class="about-item__subtext subtext">
                                See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.
                            </p>
                        </div>
                    </div>
                    <div class="about-item">
                        <AppButton
                            :showShadow="false"
                            :showHoverEffect="false"
                            min-width="7rem"
                        >02</AppButton>
                        <div>
                            <h3 class="about-item__heading heading">
                                Advanced built-in reports
                            </h3>
                            <p class="about-item__subtext subtext">
                                Set internal delivery estimates and track progress towards company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.
                            </p>
                        </div>
                    </div>
                    <div class="about-item">
                        <AppButton
                            :showShadow="false"
                            :showHoverEffect="false"
                            min-width="7rem"
                        >03</AppButton>
                        <div>
                            <h3 class="about-item__heading heading">
                                Everything you need in one place
                            </h3>
                            <p class="about-item__subtext subtext">
                                Stop jumping from one service to another to communicate, store files, track progress and share documents. Manage offers an all-in-one team productivity solution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonials">
            <h2 class="section-heading">
                What they've said
            </h2>

            <Carousel
                class="slider"
                :items-to-show="slidesToShow"
                :wrap-around="true"
                :breakpoints="breakpoints"
            >
                <Slide
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                >
                    <TestimonialCard :testimonial="testimonial" />
                </Slide>
            </Carousel>

            <AppButton>Get Started</AppButton>
        </section>

        <section class="simplify">
            <div class="content container">
                <h2 class="heading">
                    Simplify how your team works today.
                </h2>
                <AppButton>Get Started</AppButton>
            </div>
        </section>
    </main>

    <TheFooter />
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    name: "App",
    components: {
        TheNavbar,
        TheFooter,
        TestimonialCard,
        Carousel,
        Slide,
    },
    data() {
        return {
            testimonials: [
                {
                    avatar: "avatar-anisha.png",
                    name: "Anisha Li",
                    quote:
                        "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
                },
                {
                    avatar: "avatar-ali.png",
                    name: "Ali Bravo",
                    quote:
                        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
                },

                {
                    avatar: "avatar-richard.png",
                    name: "Richard Watts",
                    quote:
                        "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
                },
                {
                    avatar: "avatar-shanai.png",
                    name: "Shanai Gough",
                    quote:
                        "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
                },
            ],
            slidesToShow: 3,
            windowWidth: document.documentElement.clientWidth,
            breakpoints: {
                320: {
                    itemsToShow: 1,
                    snapAlign: "center",
                },
                // 700px and up
                769: {
                    itemsToShow: 2,
                    snapAlign: "center",
                },
                // 1024 and up
                1025: {
                    itemsToShow: 3,
                    snapAlign: "center",
                },
            },
            showMobileMenu: false,
        };
    },
    methods: {
        getWindowWidth() {
            this.windowWidth = document.documentElement.clientWidth;
        },
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener("resize", this.getWindowWidth);
        });
    },
};
</script>

<style lang="scss">
@import "./scss/base";
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400;500;700&display=swap");

#app {
    font-family: "Be Vietnam", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 4rem;
    @include breakpoint(mobile) {
        padding: 0 3rem;
    }
}
.heading,
.section-heading {
    color: $blue-dark;
    line-height: 1.2;
    letter-spacing: -1.5px;
}
.section-heading {
    text-align: center;
    font-size: 4.5rem;
}
.subtext {
    color: lighten($gray-blue-dark, 10%);
    font-weight: 500;
    line-height: 1.75;
    font-size: 1.75rem;
    letter-spacing: -0.8px;
}

section.hero {
    padding: 6rem 0 12rem;
    @include breakpoint(tablet-land) {
        padding-top: 4rem;
    }
    @include breakpoint(tablet-port) {
        padding-top: 1rem;
    }
    .overlay {
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 1000px;
        background-image: url("~@/assets/images/bg-tablet-pattern.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 115% -330px;
        overflow: hidden;
        @include breakpoint(tablet-land) {
            background-position: 125px -200px;
        }
        @include breakpoint(tablet-port) {
            background-position: 100px -100px;
        }
    }
    .content {
        display: flex;
        @include breakpoint(tablet-land) {
            flex-wrap: wrap;
        }
    }
    .col1 {
        width: 50%;
        padding: 6rem 11rem 0 0;
        @include breakpoint(laptop) {
            padding-top: 0;
        }
        @include breakpoint(tablet-land) {
            order: 2;
            width: 100%;
            padding-right: 0;
        }
        h1.heading {
            margin-bottom: 4rem;
            font-size: 5.7rem;
            line-height: 1.2;
            @include breakpoint(tablet-port) {
                font-size: 4.2rem;
                text-align: center;
            }
        }
        .subtext {
            margin-bottom: 4rem;
            padding: 0 35% 0 0;
            min-width: 436px;
            @include breakpoint(tablet-land) {
                padding-right: 0;
            }
            @include breakpoint(tablet-port) {
                min-width: auto;
            }
        }
        button {
            display: block;
            margin: 0 auto;
        }
    }
    .col2 {
        width: 50%;
        margin-left: 2rem;
        @include breakpoint(tablet-land) {
            width: 100%;
        }
        img {
            display: block;
            margin: 0 auto;
        }
    }
}

section.about {
    position: relative;
    padding: 12rem 0;
    @include breakpoint(ipadPro) {
        padding-top: 4rem;
    }
    @include breakpoint(tablet-land) {
        padding-top: 0;
        padding-bottom: 6rem;
    }
    .overlay {
        position: absolute;
        left: -55%;
        bottom: -50%;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-image: url("~@/assets/images/bg-tablet-pattern.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 0 0;
        overflow: hidden;
    }
    .content {
        position: relative;
        display: flex;
        @include breakpoint(tablet-land) {
            flex-wrap: wrap;
        }
    }
    .col1 {
        width: 50%;
        padding: 0 10% 0 0;
        @include breakpoint(tablet-land) {
            width: 100%;
            padding-right: 0;
        }
        .heading {
            margin-bottom: 2rem;
            font-size: 4.5rem;
            @include breakpoint(tablet-land) {
                font-size: 3rem;
                text-align: center;
            }
        }
        .subtext {
            padding: 0 25% 0 0;
            @include breakpoint(tablet-land) {
                padding-right: 0;
                margin-bottom: 4rem;
            }
        }
    }
    .col2 {
        width: 50%;
        margin-left: 5rem;
        @include breakpoint(tablet-land) {
            width: 100%;
            margin-left: 0;
        }
        .about-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 4rem;
            button {
                padding: 0.6rem 2.5rem 1rem;
                margin-right: 3rem;
                font-size: 1.75rem;
            }
            &__heading {
                margin: 0.5rem 0 2rem;
                font-weight: 900;
                letter-spacing: -1px;
            }
        }
    }
}

section.testimonials {
    padding: 0 0 20rem;
    @include breakpoint(ipadPro) {
        padding-bottom: 14rem;
    }
    .section-heading {
        @include breakpoint(tablet-port) {
            font-size: 3rem;
        }
    }

    .slider {
        display: flex;
        overflow-x: hidden;
        padding: 8rem 0 2rem;
        width: 100%;
    }
    button {
        display: block;
        margin: 0 auto;
    }
}

section.simplify {
    height: 26rem;
    background-color: $red-bright;
    background-image: url("~@/assets/images/bg-simplify-section-desktop.svg");
    background-repeat: no-repeat;
    background-position: center;
    @include breakpoint(tablet-port) {
        height: auto;
        padding: 12rem 0;
    }
    @include breakpoint(mobile) {
        padding: 8rem 0;
    }
    .content {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        @include breakpoint(tablet-port) {
            flex-wrap: wrap;
            align-items: center;
        }
    }
    .heading {
        padding-right: 4rem;
        font-size: 4.75rem;
        font-weight: 600;
        max-width: 55rem;
        color: #fff;
        @include breakpoint(tablet-port) {
            font-size: 3.5rem;
            text-align: center;
            padding-right: 0;
            margin-bottom: 6rem;
            font-size: 5rem;
        }
        @include breakpoint(mobile) {
            font-size: 4rem;
        }
    }
    button {
        background-color: #fff !important;
        color: $red-bright !important;
        @include breakpoint(tablet-port) {
            margin: 0 auto;
        }
    }
}

// slider
.carousel__viewport {
    padding: 6rem 0;
}
.carousel__prev,
.carousel__next {
    background-color: $red-bright;
}
</style>
