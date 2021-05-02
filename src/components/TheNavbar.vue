<template>
    <header>
        <img src="@/assets/images/logo.svg" alt />

        <nav>
            <a href="#" class="nav-item">Pricing</a>
            <a href="#" class="nav-item">Product</a>
            <a href="#" class="nav-item">About Us</a>
            <a href="#" class="nav-item">Careers</a>
            <a href="#" class="nav-item">Community</a>
        </nav>

        <AppButton>Get Started</AppButton>
    </header>
</template>

<script>
export default {
    name: "TheNavbar",
};
</script>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 15rem;

    nav {
        .nav-item {
            margin: 0 1.85rem;
            font-size: 1.4rem;
            font-weight: 900;
            color: #333;
            transition: color 0.3s;
            &:hover {
                color: lighten(#333, 40%);
            }
        }
    }
}
</style>