<template>
    <main>
        <TheNavbar class="container" />

        <section class="hero container">
            <div class="overlay"></div>
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
        </section>

        <section class="about container">
            <div class="overlay"></div>
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
        </section>

        <section class="testimonials">
            <h2 class="section-heading">
                What they've said
            </h2>

            <Carousel
                class="slider"
                :items-to-show="3"
                :wrap-around="true"
                :current-slide="1"
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
                    <img
                        src="@/assets/images/icon-facebook.svg"
                        alt=""
                    ><img
                        src="@/assets/images/icon-youtube.svg"
                        alt=""
                    ><img
                        src="@/assets/images/icon-twitter.svg"
                        alt=""
                    ><img
                        src="@/assets/images/icon-pinterest.svg"
                        alt=""
                    ><img
                        src="@/assets/images/icon-instagram.svg"
                        alt=""
                    >
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
                    <li class="link">Coummunity</li>
                    <li class="link">Privacy Policy</li>
                    <li class="link">&nbsp;</li>
                </ul>
            </div>

            <div class="col-3">
                <div class="subscribe-container">
                    <input type="text" placeholder="Updates in your inbox...">
                    <AppButton :show-shadow="false" min-width="7rem">Go</AppButton>
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
        };
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
    display: flex;
    padding: 6rem 0 12rem;
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
    }
    .col1 {
        width: 50%;
        padding: 6rem 11rem 0 0;
        h1.heading {
            margin-bottom: 4rem;
            font-size: 5.7rem;
            line-height: 1.2;
        }
        .subtext {
            margin-bottom: 4rem;
            padding: 0 25% 0 0;
        }
    }
    .col2 {
        width: 50%;
        margin-left: 2rem;
    }
}

section.about {
    position: relative;
    display: flex;
    padding: 12rem 0 12rem 0;
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
    .col1 {
        width: 50%;
        padding: 0 11rem 0 0;
        .heading {
            margin-bottom: 2rem;
            font-size: 4.5rem;
        }
        .subtext {
            padding: 0 25% 0 0;
        }
    }
    .col2 {
        width: 50%;
        margin-left: 5rem;
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
    .slider {
        display: flex;
        overflow-x: hidden;
        padding: 14rem 0 8rem;
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
    .content {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .heading {
        font-size: 4.75rem;
        font-weight: 600;
        max-width: 55rem;
        color: #fff;
    }
    button {
        background-color: #fff !important;
        color: $red-bright !important;
    }
}

footer {
    height: 30rem;
    padding: 7rem;
    background-color: $blue-extra-dark;
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        color: $gray-light;
    }
    .col-1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 20%;
        .footer-logo {
            width: 20rem;
        }
        .social-container {
            img {
                margin: 0 .75rem;
                width: 2.8rem;
            }
        }
    }
    .col-2 {
        display: flex;
        justify-content: space-between;
        width: 55%;
        height: 100%;
        padding: 0 16rem 0 10rem;
        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            .link {
                cursor: pointer;
                transition: color .3s;
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
        height: 100%;
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
        }
    }
}

// slider
.carousel__viewport {
    overflow: unset;
}
.carousel__prev,
.carousel__next {
    background-color: $red-bright;
}
</style>
