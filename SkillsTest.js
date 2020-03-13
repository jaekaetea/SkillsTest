/*
Instructions
Skills Test Using C# or Python, write a program to find the nearest common parent of any two nodes in a binary tree. Aside from stacks and queues, do not use any data structures that are built into the language. 
Package an executable to run that visually demonstrates the tree and the common parent. This could be ASCII art or web based. 
Example 
Provided the function and example btree below, if ParentFinder was provided “leaf1” and “leaf3”, it would return with “node1”. 
Function ParentFinder(BTree B, Node n1, Node n2) 
*/

/* Looks like I'm creating a function with 3 parameters that will return with a node
Why is it node1?  Without asking questions, an assumption is that it would return the left-most node nearest instead of the right.
Does the order in which the leafs/ (leaves?) were provided matter?  

Thinking; assuming it's node 1 because leaf1 is closest to node2 and leaf3 is closest to node1,
But let's say that the nodes are consecutive (think binary tree) and leaf1 is closest to node5 and leaf3(or another leaf) 
is closest to node1, then the answer would presumably be node3.
(leaf1, node6) and (leaf3, node1) would return node3 from previous assumption (left most)

Wait.  They want me to draw this?  Okie dokie.

I guess I'll assume head is a node.

Assumming picture will be exact or expanded; i.e. leaf1 is at the end, nodes go consecutive up and leafs(leaves) go down

Also, because we're working on assumptions.  How do I know the length of the binary tree?
Going to assume that since "BTree B" was provided (second letter of the alphabet), it has 2 nodes
...Do not use any data structures built into the language.  Get this done quick and create a quick function to convert letter to number... 

Is that a typo?  Says ParentFinder is provided leaf1 and leaf2, it would return node1 yet
it says example "Function ParentFinder(BTree B, Node n1, Node n2)".  I'm assuming that's a typo based off of the other instructions.
It's not provided nodes, but it's provided leaf(s)

This is probably ramblings but I've seen worse comments. . . 

And assuming we can eliminate user error and I'll be provided correct information
i.e. given capital letter for node and numbers for leaf(s) where the leaf(s) are there, i.e. can't have 1 node and 100 leaf(s)

Looking at the picture.  
(3 nodes, 5 leaf(s) | 2 nodes, 4 leaf(s) | 5 nodes, 7 leaf(s)) 
There are node+2 leaf(s)
*/

// Takes capital letter and 2 numbers

//Edit to change Nodes/ Leaf(s)
ParentFinder("B", 1, 3);

var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];

ParentFinder(a, parseInt(b), parseInt(c));


function ParentFinder(tree, n1, n2) {
    console.log("---------------------------------------------------------------");
    console.log("\n\n" + "Tree: " + tree + " | Leaf1: " + n1 + " | Leaf2: " + n2);
    var tree = treeNumber(tree);
    var n1 = n1;
    var n2 = n2;

    //First I want to find the nearest nodes for each leaf provided, then find middle node
    var n1Node = NearestNode(tree, n1);
    var n2Node = NearestNode(tree, n2);
    //console.log("nodes" + n1Node + " " + n2Node);
    var node = Math.floor((n1Node + n2Node)/2);
    console.log("Node: " + node + "\n\n");

    DrawMe(tree, n1, n2, node);
    
    console.log("\n\nFigure " + tree);
    console.log("\n---------------------------------------------------------------");
};

function DrawMe(tree, n1, n2, node) {
    var lines = "------";
    var line = "      ";
    var spaces = "          ";
    
    //First a for loop to show nodes and leaf1
    if (node == 0) {
        var Nodes = "     HEAD " + lines;
    } else {
        var Nodes = "     Head " + lines;
    }
    for (var i = 1; i <= tree; i++) {
        if (node == i) {
            Nodes = Nodes.concat("NODE" + i + lines);
        } else {
            Nodes = Nodes.concat("Node" + i + lines);
        }
    }
    
    if (n1 == 1 || n2 == 1) {
        console.log(Nodes + "LEAF1");
    } else {
        console.log(Nodes + "Leaf1");
    }
    //console.log("Head" + lines + tree + lines);

    var dashes ="      |" + spaces;
    for (var i = 0; i < tree; i++) {
        dashes = dashes.concat("|" + spaces);
        //console.log("|" + spaces + "|" + spaces + "|" + spaces);
    }

    var tSpace = "";
    for (var i = 0; i <= 5; i++) {
        tSpace = tSpace.concat(" ");
        console.log(tSpace + dashes);
    }
    
    var Leafs = "     " + tSpace;
    for (var i = tree + 2; i > 1; i--) {
        if (n1 == i || n2 == i) {
            Leafs = Leafs.concat("LEAF" + i + line);
        } else {
            Leafs = Leafs.concat("Leaf" + i + line);
        }
    }
    console.log(Leafs);
    //console.log("Leaf" + n1 + line + "Leaf" + n2);
}

function NearestNode(tree, leaf) {
    var node = 0;
    if (leaf === 1) {
        //console.log(tree);
        return tree;
    }

    for (var i = tree+2; i > 0; i--) {
        if (leaf === i) {
            break;
        }
        node++;
    }
    //console.log(node);
    return node;
}

function treeNumber(tree) { //Is taking the Unicode - 64 to find the number using data structures?  
    var num;
    switch(tree) {
        case "A": 
            num = 1;
            break;
        case "B": 
            num = 2;
            break;
        case "C": 
            num = 3;
            break;
        case "D": 
            num = 4;
            break;
        case "E": 
            num = 5;
            break;
        case "F": 
            num = 6;
            break;
        case "G": 
            num = 7;
            break;
        case "H": 
            num = 8;
            break;
        case "I": 
            num = 9;
            break;
        case "J": 
            num = 10;
            break;
        case "K": 
            num = 11;
            break;
        case "L": 
            num = 12;
            break;
        case "M": 
            num = 13;
            break;
        case "N": 
            num = 14;
            break;
        case "O": 
            num = 15;
            break;
        case "P": 
            num = 16;
            break;
        case "Q": 
            num = 17;
            break;
        case "R": 
            num = 18;
            break;
        case "S": 
            num = 19;
            break;
        case "T": 
            num = 20;
            break;
        case "U": 
            num = 21;
            break;
        case "V": 
            num = 22;
            break;
        case "W": 
            num = 23;
            break;
        case "X": 
            num = 24;
            break;
        case "Y": 
            num = 25;
            break;
        case "Z": 
            num = 26;
            break;
        //no default as assuming no user error
    }
    return num;
}





