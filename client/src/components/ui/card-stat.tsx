return (
    <Card className={`${className} grid gap-2 hover:shadow-md transition-all border-border/20 dark:border-border/20 bg-card dark:bg-card/40 relative overflow-hidden`}>
      <CardHeader className="p-4 border-b border-b-border/10 dark:border-b-border/10 flex flex-row items-center justify-between flex-wrap gap-2">
        <CardTitle className="text-md font-normal text-foreground/90 dark:text-foreground/90 w-fit">{title}</CardTitle>
        {subtitle && <CardDescription className="text-xs text-right text-muted-foreground dark:text-muted-foreground">{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className="p-4 pt-2 flex items-center justify-between flex-wrap">
        <div className={`text-[28px] font-normal tracking-tight flex items-center ${valueClassName}`}>
          {value}
          {percentChange !== undefined && (
            <span className={`text-xs ml-2 ${percentChange < 0 ? 'text-red-500' : 'text-green-500'}`}>
              {percentChange >= 0 ? '+' : ''}{percentChange}%
            </span>
          )}
        </div>
        {additionalInfo && <div className="text-[10px] text-muted-foreground">{additionalInfo}</div>}
      </CardContent>
      {children && <div className="p-4 pt-0">{children}</div>}

      {showProgressBar && (
        <div className="px-4 pb-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-500 ease-in-out bg-[#F6921A] dark:bg-[#F6921A]" 
              style={{ width: `${progressPercentage}%` }} 
            />
          </div>
          {progressLabel && <div className="text-[10px] mt-1 text-muted-foreground">{progressLabel}</div>}
        </div>
      )}
    </Card>
  );