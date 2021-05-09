<template>
    <header class="header">
        <img
            src="@/assets/images/logo.svg"
            alt="Manage logo"
        />

        <nav
            v-if="mobileMenuShowing"
            class="nav"
        >
            <a
                href="#"
                class="nav-item"
            >Pricing</a>
            <a
                href="#"
                class="nav-item"
            >Product</a>
            <a
                href="#"
                class="nav-item"
            >About Us</a>
            <a
                href="#"
                class="nav-item"
            >Careers</a>
            <a
                href="#"
                class="nav-item"
            >Community</a>
        </nav>

        <img
            v-if="mobileMenuShowing"
            src="@/assets/images/icon-close.svg"
            alt="close mobile menu icon"
            @click="mobileMenuShowing = false"
        >
        <img
            v-else
            src="@/assets/images/icon-hamburger.svg"
            alt="mobile menu icon"
            @click="mobileMenuShowing = true"
        >

        <AppButton>Get Started</AppButton>
    </header>
</template>

<script>
export default {
    name: "TheNavbar",
    data() {
        return {
            mobileMenuShowing: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 18rem;
    @include breakpoint(tablet-land) {
        min-height: 10rem;
    }
    .nav {
        @include breakpoint(tablet-land) {
            position: absolute;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            width: 85%;
            top: 12rem;
            padding: 4rem 2rem;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
            text-align: center;
        }
        .nav-item {
            margin: 0 1.85rem;
            font-size: 1.5rem;
            font-weight: 900;
            color: $blue-dark;
            transition: color 0.3s;
            @include breakpoint(tablet-land) {
                margin: 0;
                padding: 1.5rem 0;
                font-weight: 600;
                font-size: 2.3rem;
            }
            &:hover {
                color: lighten(#333, 40%);
            }
        }
    }
    button {
        @include breakpoint(laptop) {
            display: none;
        }
    }
}
</style>