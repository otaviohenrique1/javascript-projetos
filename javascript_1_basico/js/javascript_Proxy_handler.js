/* ----------Proxy handler---------- */
console.log('----------Proxy handler----------');
/*
    ----------Proxy handler----------
    The proxy's handler object is a placeholder object which contains traps for proxies.
*/
/*------------------------------------------------------*/
/*
    ----------Methods----------
    All traps are optional. If a trap has not been defined, the default behavior is to forward the operation to the target.
    handler.getPrototypeOf() -> A trap for Object.getPrototypeOf.
    handler.setPrototypeOf() -> A trap for Object.setPrototypeOf.
    handler.isExtensible() -> A trap for Object.isExtensible.
    handler.preventExtensions() -> A trap for Object.preventExtensions.
    handler.getOwnPropertyDescriptor() -> A trap for Object.getOwnPropertyDescriptor.
    handler.defineProperty() -> A trap for Object.defineProperty.
    handler.has() -> A trap for the in operator.
    handler.get() -> A trap for getting property values.
    handler.set() -> A trap for setting property values.
    handler.deleteProperty() -> A trap for the delete operator.
    handler.ownKeys() -> A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    handler.apply() -> A trap for a function call.
    handler.construct() -> A trap for the new operator.
    Some non-standard traps are obsolete and have been removed.
*/
/*------------------------------------------------------*/
console.log('------------------------------------------------------');
/*------------------------------------------------------*/