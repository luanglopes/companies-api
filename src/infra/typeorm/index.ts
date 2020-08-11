import { createConnection, getConnectionOptions, EntitySchema, ConnectionOptions } from 'typeorm'

export class DatabaseSetup {
  public async connect (): Promise<void> {
    const connOptions = await this.getNormalizedConnectionOptions()

    await createConnection(connOptions)
  }

  private async getNormalizedConnectionOptions (): Promise<ConnectionOptions> {
    const connOptions = await getConnectionOptions()

    const fileExtension = __filename.split('/').pop().split('.').pop()

    if (fileExtension === 'js') {
      Object.assign(connOptions, {
        entities: connOptions.entities?.map(this.adjustPathsAndExtensionsToBuild),
        migrations: connOptions.migrations?.map(this.adjustPathsAndExtensionsToBuild),
      })
    }

    return connOptions
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private adjustPathsAndExtensionsToBuild (path: string | Function | EntitySchema): string {
    return path.toString().replace('src', 'dist').replace('.ts', '.js')
  }
}
