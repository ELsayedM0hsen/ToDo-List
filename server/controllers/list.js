import List from "../module/list.js";

export const createItem = async (req, res) => {
    try {
        const newItem = new List({
            title: req.body.title,
            complete: false
        })
        const saveItem = await newItem.save();
        return res.json(saveItem);
    } catch (err) {
        console.log(err);
    }
};

export const allItem = async (req, res) => {
    try {
        const items = await List.find({});
        return res.json(items);
    } catch (err) {
        console.log(err);
    }
};

export const updateItem = async (req, res) => {
    try {
        const updatedItem  = await List.findByIdAndUpdate(req.params.itemId,{
            title: req.body.title,
            complete:req.body.complete
        },{new:true});
        return res.json(updatedItem);
    } catch (err) {
        console.log(err);
    }
};


export const deleteItem = async (req, res) => {
    try {
        await List.findByIdAndDelete(req.params.itemId);
        return res.json("item deleted")
    } catch (err) {
        console.log(err);
    }
};