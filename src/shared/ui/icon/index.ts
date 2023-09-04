export function createSvgMap() {
    function getSvgNameFromPath(path) {
        const pathSplit = path.split('/');
        const fileName = pathSplit[pathSplit.length - 1] || '';
        const svgName = fileName.replace('.svg', '');

        return svgName;
    }

    const modules = import.meta.glob('@/shared/assets/icons/**/*.svg', {
        import: 'default',
        eager: true,
    });

    const svgMap = new Map();

    Object.keys(modules).forEach((path) => {
        const svgName = getSvgNameFromPath(path);
        svgMap.set(svgName, modules[path]);
    });

    return svgMap;
}