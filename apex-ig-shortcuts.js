//Add JavaScript Initialization Code
//Click your Interactive Grid region → go to Attributes tab → scroll to Advanced section → find JavaScript Initialization Code. Paste the code below:

function( options ) {

  options.defaultGridViewOptions = {
    skipReadonlyCells: true
  };

  options.initActions = function( actions ) {

    // Safe helper — won't crash if action name doesn't exist
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

    // Alt+A → Add row
    setShortcut( ["row-add-row", "selection-add-row"], "Alt+A" );

    // Alt+D → Delete row
    setShortcut( ["row-delete", "selection-delete"], "Alt+D" );

    // Alt+S → Save
    setShortcut( ["save"], "Alt+S" );

    // Alt+R → Refresh
    setShortcut( ["refresh"], "Alt+R" );

  };

  return options;
}
