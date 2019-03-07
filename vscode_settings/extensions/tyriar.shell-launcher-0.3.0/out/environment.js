"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resolveEnvironmentVariables(text, isWindows) {
    if (isWindows) {
        return text.replace(/%([^%]+)%/g, (_, name) => process.env[name]);
    }
    return text.replace(/(\$[a-zA-Z_]+[a-zA-Z0-9_]*)/g, (_, name) => process.env[name.substr(1)]);
}
exports.resolveEnvironmentVariables = resolveEnvironmentVariables;
//# sourceMappingURL=environment.js.map