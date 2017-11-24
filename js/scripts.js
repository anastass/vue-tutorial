new Vue({
    el: '#vue-app',
    data: {
      john: {
        first: 'John',
        last: 'Smith',
        birthday: '1995-10-02'
      },
        girls: [
        {
        first: 'Mayla',
        last: 'irmã de Emilly',
        birthday: '1998-10-02',
        weight: 48
        }, 
        {
          first: 'Sara',
          last: 'Blakely',
          birthday: '1996-08-03',
          weight: 51
        }
      ],
    },
    computed: {
      computedFullName() {
          return "".concat(`${this.john.last}`.toUpperCase(), ", ", this.john.first);
      }
    },
    filters: {
      fullName(value) {
        return "".concat(value.first, " ", value.last);
      },
      getAge(value) {
        var d = new Date();
        var b = new Date(value.birthday);
        return d.getFullYear() - b.getFullYear();
      }
    },
    methods: {
        incrementWeight(girl) {
            girl.weight += 1;
        },
        decrementWeight(girl) {
            girl.weight -= 1;
        },
    },
    template: `<div>
    <h1>Hello {{john | fullName}}!</h1>
    <h2>Your age is {{john | getAge}}</h2>
    Name in reverse order: {{computedFullName}}<hr/>
    <p>
        <table>
            <tr>
                <th colspan="2">Name</th>
                <th>Age</th>
                <th>Weight</th>
            </tr>
            <tr v-for="girl in girls">
                <td>
                    {{girl | fullName}}
                </td>
                <td>
                    <input v-model="girl.first">
                </td>
                <td>
                    {{girl | getAge}}
                </td>
                <td>
                    {{girl.weight}} kg <button v-on:click="incrementWeight(girl)">+</button><button v-on:click="decrementWeight(girl)">-</button>
                </td>
            </tr>
        </table>
    </p>
    </div>`
})