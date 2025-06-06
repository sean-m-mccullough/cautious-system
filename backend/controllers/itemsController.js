const Item = require('../models/item.js');

exports.getItems = async (req, res) => {
    const items = await Item.find();
    res.status(200).json({ body: items});
}

exports.addItem = async (req, res) => {    
    const newItem = new Item(req.body);

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error adding item', error });
    }
}

exports.updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, isComplete } = req.body;

    try {
        const updatedItem = await Item.findOneAndUpdate(
            { id }, 
            { id, name, isComplete }, 
            { new: true, runValidators: true }
        );
        // Logic to update the item (e.g., update in database)
        res.status(200).json({ message: 'Item updated', updatedItem });
    } catch (error) {
        return res.status(400).json({ message: 'Error updating item', error });
    }
}

exports.deleteItem = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedItem = await Item.findOneAndDelete({ id });

        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        // Logic to delete the item (e.g., remove from database)
        res.status(200).json({ message: 'Item deleted', deletedItem });
    } catch (error) {
        return res.status(400).json({ message: 'Error deleting item', error });
    }
}