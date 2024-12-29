<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <slot name="upper_bar"></slot>
    <nav class="Barra_de_navegação">
        <RouterLink to="/Home">
            <img class="Home_But_IMG" src="./components/icons/FRL.svg">
        </RouterLink>
        <nav class="Navig_Buts">
            <RouterLink to="/Car">a<!--é presiso por este svg porem eu não o tenho--></RouterLink>
            <RouterLink to="/Fight_List">a<!--é presiso por este svg porem eu não o tenho--></RouterLink>
            <RouterLink to="/Forun_List">a<!--é presiso por este svg porem eu não o tenho--></RouterLink>
            <RouterLink to="/Merch_List">a<!--é presiso por este svg porem eu não o tenho--></RouterLink>
            <div class="resertch">
              <button>P</button>
              <input type="text">
            </div>
        </nav>
        <nav v-if="Logged"></nav>
        <button v-else>Log In</button>
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
        align-items: center;
        justify-content: space-between;
    }

    .Home_But_IMG{
      width: 30px;
      height: 30px;
    }

    .Navig_Buts{
      display: flex;
      flex-direction: row;
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
