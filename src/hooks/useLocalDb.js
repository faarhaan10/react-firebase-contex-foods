

const useLocalDb = () => {

    const addToDb = id => {
        const exists = getDb();

        let shopping_cart = {};
        if(!exists){
            shopping_cart[id] = 1;
            updateDb(shopping_cart);
        }
        else{
            shopping_cart = JSON.parse(exists);
            if(shopping_cart[id]){
                shopping_cart[id] += 1;
            }
            else{
                shopping_cart[id] = 1;
            }
            updateDb(shopping_cart);
        }
    }

    const getDb = () => localStorage.getItem('shopping_cart');

    const updateDb = item => {
        localStorage.setItem('shopping_cart',JSON.stringify(item));
    }

    

    return {
        addToDb
    };
};

export default useLocalDb;