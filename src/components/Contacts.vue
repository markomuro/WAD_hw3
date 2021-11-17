<template>
    <div class="contactus">
        <div>
        <h4>{{contactlist[0].name}}</h4>
        <p>e-mail: {{contactlist[0].email}}</p>
        <p>tel: {{contactlist[0].tel}}</p>
        <p>address: {{contactlist[0].address}}</p>
        </div>
        <div>
        <h4>{{contactlist[1].name}}</h4>
        <p>e-mail: {{contactlist[1].email}}</p>
        <p>tel: {{contactlist[1].tel}}</p>
        <p>address: {{contactlist[1].address}}</p>
        </div>
        <div>
        <h4>{{contactlist[2].name}}</h4>
        <p>e-mail: {{contactlist[2].email}}</p>
        <p>tel: {{contactlist[2].tel}}</p>
        <p>address: {{contactlist[2].address}}</p>
        </div>
    </div>
</template>

<style scoped>
.contactus{
  margin-top: 100px;
  display:flex;
  justify-content: space-evenly;
  align-content: space-around;
}


</style>

<script>
export default {
  name: "contactcompo",
  data: function() {
    return {}
    },
    computed: {
        contactlist(){return this.$store.state.contactlist}   
    }
};
</script>