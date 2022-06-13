import axios from "axios"

const apiUrl = 'https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new'

export default {
  async addRandomNumber(context){
    let res = await axios.get(apiUrl);
    console.log(res);
    context.commit("addToCounter", res.data)
  }
}