const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(), 'genesis');
console.log(fooBlock.toString());
