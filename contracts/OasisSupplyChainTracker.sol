// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract OasisSupplyChain is Ownable {
    enum Status {
        Ordered,
        Shipped,
        Delivered,
        Cancelled
    }

    struct Item {
        uint id;
        string name;
        Status status;
        address orderedBy;
        address approvedBy;
        address deliveredTo;
    }

    mapping(uint => Item) private items; // Mapping to store items by their IDs
    uint private itemCount; // Counter to track the total number of items
    uint256 private nonce = 0; // Nonce for random number generation
    uint256[] private itemIds; // Array to store generated item IDs

    /**
     * @dev Generates a random number based on various factors.
     */
    function getRandomNumber() internal returns (uint256) {
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender, nonce)));
        nonce++;
        return randomNumber;
    }

    /**
    * @dev Generates a random 4-digit number based on a random seed.
    * @return A 4-digit random number.
    */

    function getRandomFourDigitNumber() internal returns (uint256) {
        uint256 randomNumber = getRandomNumber(); // Generate a random number using keccak256
        uint256 fourDigitNumber = uint256(randomNumber % 10000); // Ensure it's a 4-digit number
        return fourDigitNumber;
    }


    /**
     * @dev Orders a new item with a generated ID.
     * @param _name The name of the item.
     */

    function orderItem(string memory _name) public {
        uint256 newItemId = getRandomFourDigitNumber(); // Generate a random item ID
        Item memory newItem = Item({
            id: newItemId,
            name: _name,
            status: Status.Ordered,
            orderedBy: msg.sender,
            approvedBy: address(0),
            deliveredTo: address(0)
        });
        items[newItemId] = newItem;
        itemIds.push(newItemId); // Add the new item ID to the array
        itemCount++;
    }

    /**
     * @dev Cancels an item if certain conditions are met.
     * @param _id The ID of the item.
     */

    function cancelItem(uint _id) public {
        require(
            items[_id].orderedBy == msg.sender,
            "Only the person who ordered the item can cancel it"
        );
        require(
            items[_id].status == Status.Ordered,
            "Item can only be cancelled if it is in the Ordered state"
        );
        items[_id].status = Status.Cancelled;
    }

       /**
     * @dev Approves an ordered item for shipping.
     * @param _id The ID of the item.
     */

    function approveItem(uint256 _id) public onlyOwner {
        require(
            items[_id].status == Status.Ordered,
            "Item must be in Ordered state to be approved"
        );
        items[_id].status = Status.Shipped;
        items[_id].approvedBy = msg.sender;
    }

    /**
     * @dev Marks a shipped item as delivered.
     * @param _id The ID of the item.
     */

    function shipItem(uint256 _id) public onlyOwner {
        require(
            items[_id].status == Status.Shipped,
            "Item must be in Shipped state to be shipped"
        );
        items[_id].status = Status.Delivered;
        items[_id].deliveredTo = items[_id].orderedBy;
    }

    /**
     * @dev Retrieves the status of an item.
     * @param _id The ID of the item.
     * @return The status of the item.
     */

    function getItemStatus(uint _id) public view returns (Status) {
        return items[_id].status;
    }

    /**
    * @dev Retrieves details of a specific item.
    * @param _id The ID of the item.
    * @return The item's details.
    * @notice Throws an error if the specified ID does not correspond to any item.
    */

    function getItem(uint _id) public view returns (Item memory) {
        bool isValidId = false;
        for (uint256 i = 0; i < itemIds.length; i++) {
            if (itemIds[i] == _id) {
                isValidId = true;
                break;
            }
        }
        require(isValidId, "No item with the specified ID");
        return items[_id];
    }


    /**
     * @dev Retrieves the total count of items in the contract.
     * @return The total item count.
     */

    function getItemCount() public view returns (uint) {
        return itemCount;
    }

    /**
     * @dev Retrieves all items stored in the contract.
     * @return An array of all items.
     */
    function getAllItems() public view returns (Item[] memory) {
        Item[] memory allItems = new Item[](itemIds.length);
        for (uint256 i = 0; i < itemIds.length; i++) {
            allItems[i] = items[itemIds[i]];
        }
        return allItems;
    }
}