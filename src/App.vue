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

    <footer class="footer">
        <div class="content container">
            <div class="col-1">
                <img
                    src="@/assets/images/logo-white.svg"
                    class="footer-logo"
                    alt="Manage logo"
                >
                <div class="social-container">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#FFF"
                                d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                            />
                        </svg>
                    </div>
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#FFF"
                                d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"
                            />
                        </svg>
                    </div>
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#FFF"
                                d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"
                            />
                        </svg>
                    </div>
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="#FFF"
                                d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"
                            />
                        </svg>
                    </div>
                    <div class="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="51"
                        >
                            <path
                                fill="#FFF"
                                d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="col-2">
                <ul class="linkList-1">
                    <li class="link">Home</li>
                    <li class="link">Pricing</li>
                    <li class="link">Products</li>
                    <li class="link">About Us</li>
                </ul>
                <ul class="linkList-2">
                    <li class="link">Careers</li>
                    <li class="link">Community</li>
                    <li class="link">Privacy Policy</li>
                    <li class="link">&nbsp;</li>
                </ul>
            </div>

            <div class="col-3">
                <div class="subscribe-container">
                    <input
                        type="text"
                        placeholder="Updates in your inbox..."
                    >
                    <AppButton
                        :show-shadow="false"
                        min-width="9rem"
                    >Go</AppButton>
                </div>

                <p class="copyright">
                    &copy;Copyright {{ new Date().getFullYear() }}. All Rights Reserved
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    name: "App",
    components: {
        TheNavbar,
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

footer {
    position: relative;
    height: 30rem;
    padding: 7rem 0;
    background-color: $blue-extra-dark;
    @include breakpoint(laptop) {
        height: auto;
    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        color: $gray-light;
        @include breakpoint(laptop) {
            flex-wrap: wrap;
        }
    }
    .col-1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 20%;
        @include breakpoint(laptop) {
            order: 3;
            height: auto;
            width: 100%;
            align-items: center;
        }
        .footer-logo {
            width: 19rem;
            @include breakpoint(laptop) {
                order: 2;
                margin-bottom: 6rem;
            }
        }
        .social-container {
            display: flex;
            align-items: flex-end;
            @include breakpoint(laptop) {
                order: 1;
                margin-bottom: 6rem;
                text-align: center;
            }
            .icon {
                margin: 0 2.5%;
                width: 2.8rem;
                cursor: pointer;
                @include breakpoint(laptop) {
                    height: 50px;
                    width: 50px;
                    margin: 0 1rem;
                }
                svg {
                    height: 20px;
                    width: 20px;
                    @include breakpoint(laptop) {
                        transform: scale(1.5);
                    }
                }
                :hover path {
                    fill: $red-bright;
                }
            }
        }
    }
    .col-2 {
        display: flex;
        justify-content: space-between;
        width: 55%;
        height: 100%;
        padding: 0 16rem 0 10rem;
        @include breakpoint(desktop) {
            padding-right: 10rem;
        }
        @include breakpoint(laptop) {
            order: 2;
            height: 15rem;
            padding: 0;
            width: 35rem;
            margin: 0 auto 8rem;
        }
        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            .link {
                cursor: pointer;
                transition: color 0.3s;
                &:hover {
                    color: $red-bright;
                }
            }
        }
    }
    .col-3 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 25%;
        min-width: 315px;
        height: 100%;
        @include breakpoint(laptop) {
            order: 1;
            height: 10rem;
            width: 100%;
            align-items: center;
        }
        .subscribe-container {
            display: flex;
            align-items: center;
            input {
                height: 100%;
                padding: 0 2rem;
                border-radius: 3rem;
                border: none;
                margin-right: 1rem;
                flex-grow: 1;
                outline: none;
            }
        }
        .copyright {
            text-align: right;
            color: $gray-blue-dark;
            @include breakpoint(laptop) {
                position: absolute;
                bottom: 4rem;
                left: 50%;
                width: 100%;
                text-align: center;
                transform: translateX(-50%);
            }
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
