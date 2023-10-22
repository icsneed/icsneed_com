actor {

  let sneed = actor ("r7cp6-6aaaa-aaaag-qco5q-cai") : actor {
      icrc1_total_supply : () -> async Nat;
  };  

  public func get_total_supply() : async Nat {
    await sneed.icrc1_total_supply();
  };
};
