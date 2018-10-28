function recursion(node, level = 0) {
  if (!recursion.inlineTree) recursion.inlineTree = [];

  if (recursion.inlineTree[level]) {
    recursion.inlineTree[level].push(node.value);
  } else {
    recursion.inlineTree[level] = [node.value];
  }

  if (node.left) {
    recursion(node.left, level + 1);
  }

  if (node.right) {
    recursion(node.right, level + 1);
  }

  return recursion.inlineTree;
}
