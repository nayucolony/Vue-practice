const vm = new Vue({
  el: '#app',
  template: `
  <table>
    <tr>
      <th>no</th>
      <th>Name</th>
      <th>Birthday</th>
      <th>Phone</th>
      <th>Mail</th>
    </tr>
    <tr v-for="data in datas">
      <td v-bind:class="order">{{data.key}}</td>
      <td v-bind:class="order">{{data.name}}</td>
      <td v-bind:class="order">{{data.birth}}</td>
      <td v-bind:class="order">{{data.tel}}</td>
      <td v-bind:class="order">{{data.mail}}</td>
    </tr>
  </table>
  `,
  data:{
    datas:[
      {key:1,name:"Aさん",birth:"1990-01-01",tel:"090-1111-1111",mail:"abc@to-r.net"},
      {key:2,name:"Bさん",birth:"1990-02-01",tel:"090-1111-1111",mail:"abc@to-r.net"},
      {key:3,name:"Cさん",birth:"1990-03-01",tel:"090-1111-1111",mail:"abc@to-r.net"},
      {key:4,name:"Dさん",birth:"1990-04-01",tel:"090-1111-1111",mail:"abc@to-r.net"},
      {key:5,name:"Eさん",birth:"1990-05-01",tel:"090-1111-1111",mail:"abc@to-r.net"},
      {key:6,name:"Fさん",birth:"1990-06-01",tel:"090-1111-1111",mail:"abc@to-r.net"},
      {key:7,name:"Gさん",birth:"1990-07-01",tel:"090-1111-1111",mail:"abc@to-r.net"}
    ],
    order:'even'
  },
  computed:{
    chackEven:()=>{    }
  },
  methods:{
    setOrder:()=>{
      
    }
  }
})
