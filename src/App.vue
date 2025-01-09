<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
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
        <div class="profile">
            <nav v-if="Logged" class="prof_True"></nav>
            <button v-else class="prof_False">Log In</button>
        </div>
    </nav>
    <RouterView/>
    <div class="final">
        <div>
            <p class="final">Copyright©</p>
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
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .Home_But_IMG{
        margin-left: 30px;
        width: 30px;
        height: 30px;
    }

    .Navig_Buts{
      display: flex;
      flex-direction: row;
    }

    .profile{
        margin-right: 30px;
    }

    .final{
        background-color: var(--CSecI);
        color: #0A0A16;
        margin-top: 0.3%;
        padding: 5px;
        padding-right: 10px;
        display: flex;
        flex-direction: row-reverse;
    }
</style>
