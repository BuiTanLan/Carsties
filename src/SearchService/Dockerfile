FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["src/SearchService/SearchService.csproj", "src/SearchService/"]
RUN dotnet restore "src/SearchService/SearchService.csproj"
COPY . .
WORKDIR "/src/src/SearchService"
RUN dotnet build "SearchService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SearchService.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SearchService.dll"]
