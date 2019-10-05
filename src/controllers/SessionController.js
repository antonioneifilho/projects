// index, show, store, update, destroy

const User = require('../models/User')

module.exports = {
    /*
    index() -> retornar uma listagem de sessões
    show() -> listar uma única sessão
    store() -> criar uma sessão
    update() -> alterar uma sessão
    destroy() -> deletar uma sessão 
    */
   async store(req, res) {
       //return res.json({ message: "Hello Word idiota"})
       const { email } = req.body;

       let user = await User.findOne( { email });
       if (!user){
            const user = await User.create( { email });
       }
       
       return res.json(user);
   }
};