<template>
    <main>
        <div class="overlay">
            <!-- <img src="@/assets/images/bg-tablet-pattern.svg" alt /> -->
        </div>

        <TheNavbar class="container" />

        <section class="hero container">
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
                <img src="@/assets/images/illustration-intro.svg" alt />
            </div>
        </section>

        <section class="about container">
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
                    <AppButton :showShadow="false">01</AppButton>
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
                    <AppButton :showShadow="false">02</AppButton>
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
                    <AppButton :showShadow="false">03</AppButton>
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
        </section>
    </main>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
    name: "App",
    components: {
        TheNavbar,
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
    width: 1200px;
    margin: 0 auto;
}
.overlay {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url("~@/assets/images/bg-tablet-pattern.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 100% -200px;
    overflow: hidden;
    img {
        position: absolute;
        top: -22%;
        right: -10%;
        z-index: -1;
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
    display: flex;
    padding: 6rem 0;
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
    display: flex;
    padding: 6rem 0 12rem 0;
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
    h2.heading {
    }
}
</style>
