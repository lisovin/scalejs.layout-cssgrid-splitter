param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.layout-cssgrid-splitter' |
	Remove-ScalejsExtension 'scalejs.layout-cssgrid-splitter' |
	Out-Null
