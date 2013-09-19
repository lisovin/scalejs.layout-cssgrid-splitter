param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'scalejs.layout-cssgrid-splitter' : 'Scripts/scalejs.layout-cssgrid-splitter-$($package.Version)',
		'hammer': 'Scripts/hammer'
	}" |
	Add-ScalejsExtension 'scalejs.layout-cssgrid-splitter' |
	Out-Null