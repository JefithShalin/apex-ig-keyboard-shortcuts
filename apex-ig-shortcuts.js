function( options ) {

  options.defaultGridViewOptions = {
    skipReadonlyCells: true
  };

  options.initActions = function( actions ) {

    function setShortcut( names, shortcut ) {
      var names = Array.isArray(names) ? names : [names];
      for (var i = 0; i < names.length; i++) {
        var act = actions.lookup( names[i] );
        if ( act ) {
          act.shortcut = shortcut;
          actions.update( names[i] );
          break;
        }
      }
    }

    setShortcut( ["row-add-row", "selection-add-row"], "Alt+A" );

    setShortcut( ["row-delete", "selection-delete"], "Alt+D" );

    setShortcut( ["save"], "Alt+S" );

    setShortcut( ["refresh"], "Alt+R" );

  };

  return options;
}
