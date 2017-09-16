![haskell](http://i.imgur.com/tuFExZl.png)
# Type inference

Types and inference

In these exercises you should assume the following types:

```haskell
foldr  :: (a -> b -> b) -> b -> [a] -> b
map    :: (a -> b) -> [a] -> [b]
concat :: [[a]] -> [a]
(.)    :: (b -> c) -> (a -> b) -> a -> c
```

What is the type of foldr map? #VERIFIED
1. `[a] -> [a -> a] -> [a]`
2. `[a] -> [[a -> a]] -> [a]`
3. `[a] -> [[a -> a] -> [a]]`
4. `[[a]] -> [a -> a] -> [a]`

#ASTART
this is the answer to the first question
#AEND

------

What is the type of map . foldr?
1. `(a -> a -> a) -> [a] -> [[a] -> a]`
2. `(a -> a -> a) -> [b] -> [b -> a]`
3. `(b -> a -> a) -> [a] -> [[b] -> a]`
4. `(b -> a -> a) -> [b] -> [[a] -> a]`

#ASTART
this is the answer to the second question
#AEND
