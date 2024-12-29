<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <slot name="upper_bar"></slot>
    <nav class="Barra_de_navegação">
        <RouterLink to="/Home">
            <img src="./components/icons/FRL.svg" alt="svg">
        </RouterLink>
        <div class="Navig_Buts">b</div>
        <div class="Profile_Buts">c</div>
    </nav>
    <RouterView/>
    <slot></slot>
    <div class="final">
        <div>
            <p>Copyright©</p>
        </div>
    </div>
</template>

<style>
    :root{
        --CWhite:#ECFEF3;
        --CBlack:#0A0A16;
        --CSecI:#FF931F;
        --CSecII:#FFC07F;
        --CPrin:#D62828;
    }

    @media (prefers-color-scheme: dark){
        :root{
            --CBlack:#ECFEF3;
            --CWhite:#0A0A16;
            --CSecI:#FF931F;
            --CSecII:#FFC07F;
            --CPrin:#D62828;
        }
    }

    .Barra_de_navegação{
        position: sticky;
        background-color: var(--CSecI);
        color: var(--CBlack);
        padding: 5px;
        padding-left: 30px;
        padding-right: 30px;
        display: flex;
        justify-content: space-between;
    }
    .final{
        background-color: var(--CSecI);
        color: var(--CBlack);
        margin-top: 0.3%;
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-direction: row-reverse;
    }
</style>
